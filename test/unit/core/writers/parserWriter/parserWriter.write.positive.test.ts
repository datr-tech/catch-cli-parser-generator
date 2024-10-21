import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { doesFileExist } from '@app/core/services/fileService';
import { parserWriter } from '@app/core/writers';

const timestamp = Date.now();
const parserName = `parserWriter.write.positive.${timestamp}`;
const parserPath = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('write', () => {
					describe('positive', () => {
						describe('should return true', () => {
							afterAll(() => {
								global.jestRemoveFileSync(parserPath);
							});
							test("when 'parserCode' has been written to a file named 'parserName'", () => {
								/*
								 * Arrange
								 */
								const doesExistExpected = true;
								const hasBeenWrittenExpected = true;
								const parserCode = 'const testVar = 123;'

								/*
								 * Act
								 */
								parserWriter.validate({ parserCode, parserName });
								const hasBeenWrittenFound = parserWriter.write();
								const { doesExist } = doesFileExist({ filePath: parserPath });

								/*
								 * Assert
								 */
								expect(hasBeenWrittenFound).toBe(hasBeenWrittenExpected);
								expect(doesExist).toBe(doesExistExpected);
							});
						});
					});
				});
			});
		});
	});
});