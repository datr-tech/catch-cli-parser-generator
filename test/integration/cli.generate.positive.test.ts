import { execa } from 'execa';

describe('cli.generate', (): void => {
	test('should run the expected command', async (): Promise<void> => {
		const json = { "name": "joe" };
		const response: string = await global.jestRunProdCli({ json, execa });
		expect(response).toBeTruthy();
	})
})