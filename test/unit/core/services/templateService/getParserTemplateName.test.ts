import { getParserTemplateName } from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getParserTemplateName', () => {
					describe("should return the expected 'templateName'", () => {
						test("when 'parserDef' is valid (leaf)", () => {
							/*
							 * Arrange
							 */
							const templateNameExpected = 'parserLeaf.hbs';
							const parserDef = parserDefLeafPositive;

							/*
							 * Act
							 */
							const templateNameFound = getParserTemplateName({ parserDef });

							/*
							 * Assert
							 */
							expect(templateNameFound).toBe(templateNameExpected);
						});
					});
				});
			});
		});
	});
});
