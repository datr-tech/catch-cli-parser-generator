import { FileExistTypeEnum } from '@app/config/enums';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { doesFileExist } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('doesFileExist', () => {
					describe('negative', () => {
						describe('should return false', () => {
							test("when 'filePath' is an empty string", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.INVALID_FILE_PATH;
								const filePath = '';

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ filePath });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBe(nonExistentTypeExpected);
							});
							test("when 'filePath' does not identify an existing file", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.FILE_NOT_EXISTS;
								const timestamp = Date.now();
								const filePathToNonExistentFile = `${CONSTS_PATHS_APP_ROOT}/doesCodeFileExistHelper.${timestamp}.txt`;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({
									filePath: filePathToNonExistentFile,
								});

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBe(nonExistentTypeExpected);
							});
							test("when the 'filePath' identifies a dir", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.ENTITY_NOT_FILE;
								const filePath = CONSTS_PATHS_APP_ROOT;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ filePath });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBe(nonExistentTypeExpected);
							});
						});
					});
				});
			});
		});
	});
});
