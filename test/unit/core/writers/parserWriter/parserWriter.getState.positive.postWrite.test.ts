import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { parserWriter } from '@app/core/writers';

const timestamp = Date.now();
const parserName = `parserWriter.write.positive.${timestamp}`;
const parserPath = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('getState', () => {
					describe('positive', () => {
						describe('should return an empty state', () => {
							afterAll(() => {
								global.jestRemoveFileSync(parserPath);
							});
							test("when 'parserCode' has been written to a file named 'parserName'", () => {
								/*
								 * Arrange
								 */
								const hasBeenWrittenExpected = true;
								const parserCode = 'const testVar = 123;';
								const stateExpected = {
									isValid: false,
									parserCode: undefined,
									parserName: undefined,
									parserPath: undefined,
								};

								/*
								 * Act
								 */
								parserWriter.validate({ parserCode, parserName });
								const hasBeenWrittenFound = parserWriter.write();
								const stateFound = parserWriter._getState();

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
