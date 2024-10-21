import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { parserWriter } from '@app/core/writers';

const timestamp = Date.now();
const parserName = `parserWriter.getState.negative.${timestamp}`;
const parserPath = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('getState', () => {
					describe('negative', () => {
						describe('should return an empty state', () => {
							beforeAll(() => {
								global.jestTouchFileSync(parserPath);
							});
							afterAll(() => {
								global.jestRemoveFileSync(parserPath);
							});
							test("when 'parserPath' identifies an existing file", () => {
								/*
								 * Arrange
								 */
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
