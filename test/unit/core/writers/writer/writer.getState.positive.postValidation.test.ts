import { writer } from '@app/core/writers';
import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('getState', () => {
					describe('positive: postValidation', () => {
						describe('should return the expected state', () => {
							test("when 'code' could be written to a file named 'name'", () => {
								/*
								 * Arrange
								 */
								const code = 'const testVar = 123;';
								const name = 'writer.getState.positive.postValidation';
								const path = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;
								const stateExpected = {
									isValid: true,
									code,
									name,
									path,
								};

								/*
								 * Act
								 */
								writer.validate({ code, name });
								const stateFound = writer._getState();

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
