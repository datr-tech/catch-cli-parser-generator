import { assertStringParserName } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringParserName', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'parserName' is a valid string", () => {
							/*
							 * Arrange
							 */
							const parserName = 'parserName';

							/*
							 * Act
							 */
							const response = assertStringParserName({ parserName });

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
