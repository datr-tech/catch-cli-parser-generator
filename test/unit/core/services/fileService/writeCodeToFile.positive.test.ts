import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { doesFileExist, writeCodeToFile } from '@app/core/services/fileService';

let path: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('positive', () => {
						describe('should return undefined', () => {
							beforeAll(() => {
								const timestamp = Date.now();
								path = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.positive.${timestamp}.ts`;
							});
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'code' has been written to 'path'", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const doesExistExpected = true;

								// Act
								writeCodeToFile({ code, path });
								const { doesExist } = doesFileExist({ path });

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
