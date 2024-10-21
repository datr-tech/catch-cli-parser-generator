import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { parserWriter } from '@app/core/writers';

const timestamp = Date.now();
const parserName = `parserWriter.validate.negative.${timestamp}`;
const parserPath = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('validate', () => {
					describe('negative', () => {
						describe("should return false", () => {
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
								const isValidExpected = false;
								const parserCode = 'const testVar = 123;'

								/*
								 * Act
								 */
								const isValidFound = parserWriter.validate({ parserCode, parserName });

								/*
								 * Assert
								 */
								expect(isValidFound).toBe(isValidExpected);
							});
						});
					});
				});
			});
		});
	});
});