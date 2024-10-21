import { parserWriter } from '@app/core/writers';
import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('getState', () => {
					describe('positive: postValidation', () => {
						describe('should return the expected state', () => {
							test("when 'parserCode' could be written to a file named 'parserName'", () => {
								/*
								 * Arrange
								 */
								const parserCode = 'const testVar = 123;';
								const parserName = 'parserWriter.validate.positive';
								const parserPath = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;
								const stateExpected = {
									isValid: true,
									parserCode,
									parserName,
									parserPath,
								};

								/*
								 * Act
								 */
								parserWriter.validate({ parserCode, parserName });
								const stateFound = parserWriter._getState();

								/*
								 * Assert
								 */
								expect(stateFound).toStrictEqual(stateExpected);
							});
						});
					});
				});
			});
		});
	});
});
