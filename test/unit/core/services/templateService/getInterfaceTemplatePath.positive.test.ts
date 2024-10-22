import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { getInterfaceTemplatePath } from '@app/core/services/templateService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getInterfaceTemplatePath', () => {
					describe('positive', () => {
						test("should return the expected 'templatePath'", () => {
							/*
							 * Arrange
							 */
							const name = 'commonParse.hbs';
							const templatePathExpected = `${CONSTS_PATHS_TEMPLATES_DIR}/interfaces/${name}`;
							/*
							 * Act
							 */
							const templatePathFound = getInterfaceTemplatePath({ name });
							/*
							 * Assert
							 */
							expect(templatePathFound).toBe(templatePathExpected);
						});
					});
				});
			});
		});
	});
});
