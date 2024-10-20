import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import {
	getTemplateNameHelperParser,
	getTemplatePathHelperParser,
} from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplatePathHelperParser', () => {
					describe("should return the expected 'templatePath'", () => {
						test("when 'parserDef' is valid (leaf)", () => {
							/*
							 * Arrange
							 */
							const templatePathExpected = `${CONSTS_PATHS_TEMPLATES_DIR}/parsers/parserLeaf.hbs`;
							const parserDef = parserDefLeafPositive;

							/*
							 * Act
							 */
							const templateName = getTemplateNameHelperParser({ parserDef });
							const templatePathFound = getTemplatePathHelperParser({ templateName });
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
