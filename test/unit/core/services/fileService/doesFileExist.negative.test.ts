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
							test("when 'path' is an empty string", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.INVALID_FILE_PATH;
								const path = '';

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ path });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBe(nonExistentTypeExpected);
							});
							test("when 'path' does not identify an existing file", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.FILE_NOT_EXISTS;
								const timestamp = Date.now();
								const pathToNonExistentFile = `${CONSTS_PATHS_APP_ROOT}/doesFileExist.${timestamp}.txt`;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({
									path: pathToNonExistentFile,
								});

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBe(nonExistentTypeExpected);
							});
							test("when the 'path' identifies a dir", () => {
								// Arrange
								const doesExistExpected = false;
								const nonExistentTypeExpected = FileExistTypeEnum.ENTITY_NOT_FILE;
								const path = CONSTS_PATHS_APP_ROOT;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ path });

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
