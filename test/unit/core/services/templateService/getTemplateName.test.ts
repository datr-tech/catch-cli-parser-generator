import { TemplateNamePrefixEnum } from '@app/config/enums';
import { getTemplateName } from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getTemplateName', () => {
					describe('positive', () => {
						describe("should return the expected 'templateName'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const namePrefix = TemplateNamePrefixEnum.PARSER;
								const templateNameExpected = 'parserLeaf.hbs';
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateNameFound = getTemplateName({
									parserDef,
									namePrefix,
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
