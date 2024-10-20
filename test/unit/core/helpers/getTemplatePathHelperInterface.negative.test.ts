import { getTemplatePathHelperInterface } from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplatePathHelperInterface', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'templateName' is an empty string", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'templateNames'";
								const templateName = '';

								/*
								 * Act
								 */
								const handler = () => {
									getTemplatePathHelperInterface({ templateName });
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
});
