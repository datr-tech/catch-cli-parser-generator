import {
	CONSTS_PROGRAMME_NAME,
	CONSTS_PROGRAMME_DESCRIPTION,
} from '@app/config/consts/progamme';

describe('config', () => {
	describe('consts', () => {
		describe('programme', () => {
			test('CONSTS_PROGRAMME_NAME', () => {
				const nameExpected = 'catch-cli-parser-generator';
				expect(CONSTS_PROGRAMME_NAME).toBe(nameExpected);
			});
			test('CONSTS_PROGRAMME_DESCRIPTION', () => {
				const descriptionExpected =
					"A TypeScript CLI for the generation of '@datr.tech/catch-api' parsers";
				expect(CONSTS_PROGRAMME_DESCRIPTION).toBe(descriptionExpected);
			});
		});
	});
});
