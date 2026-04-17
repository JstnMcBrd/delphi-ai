import { describe, test } from 'vitest';

import delphi from '../src/index.js';

describe('api', () => {
	test('should succeed', async () => {
		await delphi('Testing an API');
	});
});
