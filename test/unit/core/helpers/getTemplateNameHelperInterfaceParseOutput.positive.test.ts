import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import { getTemplateNameHelperInterfaceParseOutput } from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateNameHelperInterfaceParseOutput', () => {
					describe('positive', () => {
						describe("should return the expected 'templateName'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const templateNameExpected = 'interfaceParseOutputLeaf.hbs';
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateNameFound = getTemplateNameHelperInterfaceParseOutput({
									parserDef,
								});
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
});
