import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import {
	getTemplateNameHelperParser,
	getTemplatePathHelperParser,
	getTemplateHelper,
} from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelper', () => {
					describe("should return the expected 'templates'", () => {
						test("when 'parserDef' is valid (leaf)", () => {
							/*
							 * Arrange
							 */
							const parserDef = parserDefLeafPositive;

							/*
							 * Act
							 */
							const templateName = getTemplateNameHelperParser({ parserDef });
							const templatePath = getTemplatePathHelperParser({ templateName });
							const templateFound = getTemplateHelper({ templatePath });
							const templateExpected = global.jestReadFileSync(templatePath);

							/*
							 * Assert
							 */
							expect(templateFound).toBe(templateExpected);
						});
					});
				});
			});
		});
	});
});
