import { assertStringCode } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringCode', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when 'code' is an empty string", () => {
							/*
							 * Arrange
							 */
							const code = '';
							const errorExpected = "Invalid 'code'";

							/*
							 * Act
							 */
							const handler = () => {
								assertStringCode({ code });
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
