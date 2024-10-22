import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `parserWriter.validate.negative.${timestamp}`;
const path = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('validate', () => {
					describe('negative', () => {
						describe('should return false', () => {
							beforeAll(() => {
								global.jestTouchFileSync(path);
							});
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'path' identifies an existing file", () => {
								/*
								 * Arrange
								 */
								const isValidExpected = false;
								const code = 'const testVar = 123;';

								/*
								 * Act
								 */
								const isValidFound = writer.validate({ code, name });

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
