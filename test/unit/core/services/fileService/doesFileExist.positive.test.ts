import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { doesFileExist } from '@app/core/services/fileService';

let path: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('doesFileExist', () => {
					describe('positive', () => {
						describe('should return true', () => {
							beforeAll(() => {
								const timestamp = Date.now();
								const fileName = `doesFileExist.positive.${timestamp}.txt`;
								path = `${CONSTS_PATHS_APP_ROOT}/${fileName}`;
								global.jestTouchFileSync(path);
							});
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'path' identifies a valid file", () => {
								// Arrange
								const doesExistExpected = true;

								// Act
								const { doesExist, nonExistentType } = doesFileExist({ path });

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
