import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirService } from '@app/services/fileService';

describe('DirService', () => {
	describe('getDir', () => {
		describe('should throw an error', () => {
			test("when the received 'dirPathStr' param represents an existing dir, but the 'isValid' function was been called beforehand", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'isDirPathValidFlag'";
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirService = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const handler = () => {
					dirService.getDirPath();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
