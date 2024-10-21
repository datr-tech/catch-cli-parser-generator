import { assertStringCodeFilePath } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringCodeFilePath', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when 'codeFilePath' is an empty string", () => {
							/*
							 * Arrange
							 */
							const codeFilePath = '';
							const errorExpected = "Invalid 'codeFilePath'";

							/*
							 * Act
							 */
							const handler = () => {
								assertStringCodeFilePath({ codeFilePath });
							}

							/*
							 * Assert
							 */
							expect(handler).toThrow(errorExpected);
						});
					});
				});
			});
		});
	});
});
