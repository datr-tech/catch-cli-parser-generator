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
								const filePath = '';

								// Act
								const { doesExist } = doesFileExist({ filePath });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
							});
							test("when 'filePath' does not identify an existing file", () => {
								// Arrange
								const doesExistExpected = false;
								const timestamp = Date.now();
								const filePathToNonExistentFile = `${CONSTS_PATHS_APP_ROOT}/doesCodeFileExistHelper.${timestamp}.txt`;

								// Act
								const { doesExist } = doesFileExist({ filePath: filePathToNonExistentFile });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
							});
							test("when the 'filePath' identifies a dir", () => {
								// Arrange
								const doesExistExpected = false;
								const filePath = CONSTS_PATHS_APP_ROOT;

								// Act
								const { doesExist } = doesFileExist({ filePath });

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
