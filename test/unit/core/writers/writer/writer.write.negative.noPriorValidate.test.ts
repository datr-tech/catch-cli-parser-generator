import { writer } from '@app/core/writers';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('write', () => {
					describe('negative: noPriorValidate', () => {
						describe('should return false', () => {
							test("when 'validate' has NOT been called prior to 'write'", () => {
								/*
								 * Arrange
								 */
								const writeResponseExpected = false;

								/*
								 * Act
								 */
								const writeResponseFound = writer.write();

								/*
								 * Assert
								 */
								expect(writeResponseFound).toBe(writeResponseExpected);
							});
						});
					});
				});
			});
		});
	});
});
