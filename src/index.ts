import { URL, URLSearchParams } from "node:url";

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
export default async function (input: string): Promise<string> {
	// The API does not like empty prompts
	if (input === "") {
		input = " ";
	}

	// Format request URL
	const url = new URL("https://mosaic-api-frontdoor.apps.allenai.org/predict");
	url.search = new URLSearchParams({
		action1: encodeURIComponent(input),
	}).toString();

	// Send request
	const response = await fetch(url);

	// Format and throw HTTP errors
	if (!response.ok) {
		const err = new Error(`${response.status} ${response.statusText}.`, { cause: response });
		err.name = "HTTPError";
		throw err;
	}

	// Parse and return response
	const json = await response.json() as DelphiAPIResponse;
	return json.answer.text;
}
