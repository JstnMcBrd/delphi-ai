import { basename } from "node:path";
import { URL, URLSearchParams } from "node:url";

import { afterAll, beforeEach, describe, expect, it, jest } from "@jest/globals";

const mockFetch = jest.spyOn(global, "fetch");

// Dynamically import the module to test
const delphi = (await import("./index.js")).default;

describe(basename(import.meta.url), () => {

	const goodResponseText = "mock response";
	const goodResponse = {
		ok: true,
		// eslint-disable-next-line @typescript-eslint/require-await
		json: async () => ({ answer: { text: goodResponseText } }),
	} as Response;

	const badResponse = {
		ok: false,
		status: 404,
		statusText: "Not found",
	} as Response;

	beforeEach(() => {
		mockFetch.mockResolvedValue(goodResponse);
	});

	it("should replace empty input with whitespace", async () => {
		await delphi("");
		const url = mockFetch.mock.calls[0][0] as URL;
		const params = new URLSearchParams(url.search);
		const input = decodeURIComponent(params.get("action1") ?? "");
		expect(input).toEqual(" ");
	});

	it("should throw an error if it receives a bad response", async () => {
		mockFetch.mockResolvedValue(badResponse);
		await expect(delphi("test")).rejects.toThrowError();
	});

	it("it should return the answer text if it receives a good response", async () => {
		mockFetch.mockResolvedValue(goodResponse);
		const output = await delphi("");
		expect(output).toEqual(goodResponseText);
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});
});
