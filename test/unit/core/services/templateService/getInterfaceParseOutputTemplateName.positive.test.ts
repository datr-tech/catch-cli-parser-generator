import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';
import { getInterfaceParseOutputTemplateName } from '@app/core/services/templateService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getInterfaceParseOutputTemplateName', () => {
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
								const templateNameFound = getInterfaceParseOutputTemplateName({
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
