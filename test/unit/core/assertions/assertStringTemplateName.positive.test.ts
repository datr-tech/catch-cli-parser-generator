import { assertStringTemplateName } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringTemplateName', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'templateName' is valid", () => {
							/*
							 * Arrange
							 */
							const templateName = 'aValidMockTemplateName';

							/*
							 * Act
							 */
							const response = assertStringTemplateName({ templateName });

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
