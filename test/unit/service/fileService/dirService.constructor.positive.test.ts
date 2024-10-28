import { DirService } from '@app/services/fileService';

describe('DirService', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when the value of the received 'dirPathStr' param is a non-empty string", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = 'TEST_DIR_PATH';

				/*
				 * Act
				 */
				const dirService = DirService({ dirPathStr });

				/*
				 * Assert
				 */
				expect(dirService).toBeTruthy();
			});
		});
	});
});
