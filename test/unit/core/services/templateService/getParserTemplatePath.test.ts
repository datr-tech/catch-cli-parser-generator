import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { getParserTemplateName, getParserTemplatePath } from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getParserTemplateName', () => {
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
							const templateName = getParserTemplateName({ parserDef });
							const templatePathFound = getParserTemplatePath({ templateName });
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
