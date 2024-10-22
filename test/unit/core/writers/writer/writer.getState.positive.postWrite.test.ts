import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `parserWriter.getState.positive.postWrite.${timestamp}`;
const path = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('getState', () => {
					describe('positive', () => {
						describe('should return an empty state', () => {
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'code' has been written to a file named 'name'", () => {
								/*
								 * Arrange
								 */
								const hasBeenWrittenExpected = true;
								const code = 'const testVar = 123;';
								const stateExpected = {
									isValid: false,
									code: undefined,
									name: undefined,
									path: undefined,
								};

								/*
								 * Act
								 */
								writer.validate({ code, name });
								const hasBeenWrittenFound = writer.write();
								const stateFound = writer._getState();

								/*
								 * Assert
								 */
								expect(hasBeenWrittenFound).toBe(hasBeenWrittenExpected);
								expect(stateFound).toStrictEqual(stateExpected);
							});
						});
					});
				});
			});
		});
	});
});
