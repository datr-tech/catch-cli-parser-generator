import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { doesFileExist } from '@app/core/services/fileService';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `writer.write.positive.${timestamp}`;
const path = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('write', () => {
					describe('positive', () => {
						describe('should return true', () => {
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'code' has been written to a file named 'name'", () => {
								/*
								 * Arrange
								 */
								const doesExistExpected = true;
								const hasBeenWrittenExpected = true;
								const code = 'const testVar = 123;';

								/*
								 * Act
								 */
								writer.validate({ code, name });
								const hasBeenWrittenFound = writer.write();
								const { doesExist } = doesFileExist({ path });

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
