import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirService } from '@app/services/fileService';

describe('DirService', () => {
	describe('getDir', () => {
		describe('should return true', () => {
			test("when the received 'dirPathStr' param represents an existing dir and the 'isValid' function has been called", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirService = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirService.isValid();
				const dirPathStrFound = dirService.getDirPath();
				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
				expect(dirPathStrFound).toBe(dirPathStr);
			});
		});
	});
});
