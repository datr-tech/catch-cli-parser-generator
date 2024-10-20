import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { getTemplatePathHelperInterface } from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplatePathHelperInterface', () => {
					describe('positive', () => {
						test("should return the expected 'templatePath'", () => {
							/*
							 * Arrange
							 */
							const templateName = 'commonParse.hbs';
							const templatePathExpected = `${CONSTS_PATHS_TEMPLATES_DIR}/interfaces/${templateName}`;
							/*
							 * Act
							 */
							const templatePathFound = getTemplatePathHelperInterface({ templateName });
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
