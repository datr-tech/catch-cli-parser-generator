import {
	CONSTS_COMMANDS_GENERATE_DESCRIPTION,
	CONSTS_COMMANDS_GENERATE_NAME,
} from '@app/config/consts/commands';

describe('unit', () => {
	describe('config', () => {
		describe('consts', () => {
			describe('commands', () => {
				test("'CONSTS_COMMANDS_GENERATE_DESCRIPTION' should be an expected", () => {
					const descriptionExpected = "Generate '@datr.tech/catch-api' parsers";
					expect(CONSTS_COMMANDS_GENERATE_DESCRIPTION).toBe(descriptionExpected);
				});
				test("'CONSTS_COMMANDS_GENERATE_NAME' should be 'generator'", () => {
					expect(CONSTS_COMMANDS_GENERATE_NAME).toBe('generate');
				});
			});
		});
	});
});
