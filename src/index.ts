interface DelphiAPIResponse {
	answer: {
		text: string;
	};
}

/**
 * @param input The input to send to Delphi AI
 * @returns The output from Delphi AI
 * @throws If the API returns a non-200 response
 */
export default async function delphi(input: string): Promise<string> {
	// The API does not like empty prompts
	if (input === '') {
		input = ' ';
	}

	// Format request URL
	const url = new URL('https://mosaic-api-frontdoor.apps.allenai.org/predict');
	url.searchParams.append('action1', input);

	// Send request
	const response = await fetch(url);

	// Format and throw HTTP errors
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`, { cause: response });
	}

	// Parse and return response
	const json = await response.json() as DelphiAPIResponse;
	return json.answer.text;
}
