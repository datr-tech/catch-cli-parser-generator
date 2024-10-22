import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { CodeTypeEnum } from '@app/config/enums';
import { doesFileExist } from '@app/core/services/fileService';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `writer.write.positive.codeType.parser.${timestamp}`;
const dir = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}`;
const path = `${dir}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('write', () => {
					describe('positive: codeType.parser', () => {
						describe('should return true', () => {
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'code' has been written to the 'outDir' using 'codeType: parser'", () => {
								/*
								 * Arrange
								 */
								const doesExistExpected = true;
								const hasBeenWrittenExpected = true;
								const code = 'const testVar = 123;';

								/*
								 * Act
								 */
								writer.validate({
									code,
									name,
									codeType: CodeTypeEnum.PARSER,
								});
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
