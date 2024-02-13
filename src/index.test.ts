import { basename } from 'node:path';
import { URL } from 'node:url';

import { afterAll, describe, expect, it, vi } from 'vitest';

import delphi from './index.js';

describe(basename(import.meta.url), () => {
	const mockFetch = vi.fn<URL[], Promise<Response>>();
	vi.stubGlobal('fetch', mockFetch);

	const goodResponseText = 'mock response';
	const goodResponse = {
		ok: true,
		json: () => Promise.resolve({ answer: { text: goodResponseText } }),
	} as Response;

	const badResponse = {
		ok: false,
		status: 404,
		statusText: 'Not Found',
	} as Response;

	afterAll(() => {
		vi.restoreAllMocks();
	});

	it('should replace empty input with whitespace', async () => {
		mockFetch.mockResolvedValue(goodResponse);
		await delphi('');
		const url = mockFetch.mock.calls[0][0];
		const input = url.searchParams.get('action1') ?? '';
		expect(input).toEqual(' ');
	});

	it('should return the answer text if it receives a good response', async () => {
		mockFetch.mockResolvedValue(goodResponse);
		const output = await delphi('');
		expect(output).toEqual(goodResponseText);
	});

	it('should throw an error if it receives a bad response', async () => {
		mockFetch.mockResolvedValue(badResponse);
		await expect(delphi('test')).rejects.toThrowError();
	});
});
