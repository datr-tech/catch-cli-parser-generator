import { assertStringPath } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringCode', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'path' is a valid string", () => {
							/*
							 * Arrange
							 */
							const path = '/a/test/path';

							/*
							 * Act
							 */
							const response = assertStringPath({ path });

							/*
							 * Assert
							 */
							expect(response).toBeUndefined();
						});
					});
				});
			});
		});
	});
});
