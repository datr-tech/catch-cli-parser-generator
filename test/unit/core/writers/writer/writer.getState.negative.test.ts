import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `parserWriter.getState.negative.${timestamp}`;
const path = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('getState', () => {
					describe('negative', () => {
						describe('should return an empty state', () => {
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
