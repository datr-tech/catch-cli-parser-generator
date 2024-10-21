import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { doesFileExist } from '@app/core/services/fileService';

let filePath: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('doesFileExist', () => {
					describe('positive', () => {
						describe('should return true', () => {
							beforeAll(() => {
								const timestamp = Date.now();
								const fileName = `doesCodeFileExistHelper.positive.${timestamp}.txt`;
								filePath = `${CONSTS_PATHS_APP_ROOT}/${fileName}`;
								global.jestTouchFileSync(filePath);
							});
							afterAll(() => {
								global.jestRemoveFileSync(filePath);
							});
							test("when 'filePath' identifies a valid file", () => {
								// Arrange
								const doesExistExpected = true;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ filePath });

								// Assert
								expect(doesExist).toBe(doesExistExpected);
								expect(nonExistentType).toBeUndefined();
							});
						});
					});
				});
			});
		});
	});
});
