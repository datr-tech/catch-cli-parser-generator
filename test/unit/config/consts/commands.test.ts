import {
	CONSTS_COMMANDS_GENERATOR_DESCRIPTION,
	CONSTS_COMMANDS_GENERATOR_NAME,
} from '@app/config/consts/commands';

describe('config', () => {
	describe('consts', () => {
		describe('commands', () => {
			test("'CONSTS_COMMANDS_GENERATOR_DESCRIPTION' should be an expected", () => {
				const descriptionExpected = "Generate '@datr.tech/catch-api' parsers";
				expect(CONSTS_COMMANDS_GENERATOR_DESCRIPTION).toBe(descriptionExpected);
			});
			test("'CONSTS_COMMANDS_GENERATOR_NAME' should be 'generator'", () => {
				expect(CONSTS_COMMANDS_GENERATOR_NAME).toBe('generator');
			});
		});
	});
});
