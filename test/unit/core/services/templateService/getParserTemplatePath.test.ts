import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { getParserTemplateName, getParserTemplatePath } from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

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
							const name = getParserTemplateName({ parserDef });
							const templatePathFound = getParserTemplatePath({ name });
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
