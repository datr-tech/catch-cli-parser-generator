import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { doesFileExist, writeCodeToFile } from '@app/core/services/fileService';

let codeFilePath: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('positive', () => {
						describe('should return undefined', () => {
							beforeAll(() => {
								const timestamp = Date.now();
								codeFilePath = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.positive.${timestamp}.ts`;
							});
							afterAll(() => {
								global.jestRemoveFileSync(codeFilePath);
							});
							test("when 'code' has been written to 'codeFilePath'", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const doesExistExpected = true;

								// Act
								writeCodeToFile({ code, codeFilePath });
								const { doesExist } = doesFileExist({ filePath: codeFilePath });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
							});
						});
					});
				});
			});
		});
	});
});
