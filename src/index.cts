/**
 * @param input The input to send to Delphi AI
 * @returns The output from Delphi AI
 * @throws If the API returns a non-200 response
 */
export = async function delphi(input: string): Promise<string> {
	const delphiEsm = (await import('./index.js')).default;
	return await delphiEsm(input);
};
