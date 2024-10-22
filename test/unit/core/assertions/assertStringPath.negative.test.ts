import { assertStringPath } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringPath', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when 'path' is an empty string", () => {
							/*
							 * Arrange
							 */
							const path = '';
							const errorExpected = "Invalid 'path'";

							/*
							 * Act
							 */
							const handler = () => {
								assertStringPath({ path });
							};

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
