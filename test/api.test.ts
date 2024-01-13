import { basename } from 'node:path';

import { describe, it } from 'vitest';

import delphi from '../src/index.js';

describe(basename(import.meta.url), () => {
	it('should succeed', async () => {
		await delphi('Testing an API');
	});
});
