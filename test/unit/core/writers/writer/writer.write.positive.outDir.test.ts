import { doesFileExist } from '@app/core/services/fileService';
import { writer } from '@app/core/writers';

const timestamp = Date.now();
const name = `writer.write.positive.outDir.${timestamp}`;
const outDir = './';
const path = `${outDir}/${name}.ts`;

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('write', () => {
					describe('positive: outDir', () => {
						describe('should return true', () => {
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'code' has been written to the 'outDir'", () => {
								/*
								 * Arrange
								 */
								const doesExistExpected = true;
								const hasBeenWrittenExpected = true;
								const code = 'const testVar = 123;';

								/*
								 * Act
								 */
								writer.validate({ code, name, outDir });
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
