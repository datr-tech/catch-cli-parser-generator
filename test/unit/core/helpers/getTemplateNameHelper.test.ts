import { TemplateNamePrefixEnum } from '@app/config/enums';
import { getTemplateNameHelper } from '@app/core/helpers';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateNameHelper', () => {
					describe('positive', () => {
						describe("should return the expected 'templateName'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const templateNamePrefix = TemplateNamePrefixEnum.PARSER;
								const templateNameExpected = 'parserLeaf.hbs';
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateNameFound = getTemplateNameHelper({
									parserDef,
									templateNamePrefix,
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
