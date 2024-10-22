import { getInterfaceTemplatePath } from '@app/core/services/templateService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getInterfaceTemplatePath', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'name' is an empty string", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'name'";
								const name = '';

								/*
								 * Act
								 */
								const handler = () => {
									getInterfaceTemplatePath({ name });
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
