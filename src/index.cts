/**
 * @param input The input to send to Delphi AI
 * @returns The output from Delphi AI
 * @throws If the API returns a non-200 response
 */
export = async function (input: string): Promise<string> {
	const delphi = (await import("./index.js")).default;
	return await delphi(input);
}
