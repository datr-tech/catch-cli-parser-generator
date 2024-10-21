import { getInterfaceTemplatePath } from '@app/core/services/templateService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getInterfaceTemplatePath', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'templateName' is an empty string", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'templateName'";
								const templateName = '';

								/*
								 * Act
								 */
								const handler = () => {
									getInterfaceTemplatePath({ templateName });
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
