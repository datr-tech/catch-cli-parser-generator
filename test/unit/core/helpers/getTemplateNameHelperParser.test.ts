import { getTemplateNameHelperParser } from '@app/core/helpers';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateNameHelperParser', () => {
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
							const templateNameFound = getTemplateNameHelperParser({ parserDef });

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
