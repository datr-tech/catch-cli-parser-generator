import { assertTemplateName } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertTemplateName', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'templateNames' is valid", () => {
							/*
							 * Arrange
							 */
							const templateName = 'aValidMockTemplateName';

							/*
							 * Act
							 */
							const response = assertTemplateName({ templateName });

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
