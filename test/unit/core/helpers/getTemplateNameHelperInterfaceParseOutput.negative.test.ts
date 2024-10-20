import { parserDefStemNegativeParser } from '@test/fixtures/core/generators/parserDefs';
import { getTemplateNameHelperInterfaceParseOutput } from '@app/core/helpers';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateNameHelperInterfaceParseOutput', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'parserDef' is invalid (stem)", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'parserDef.parser'";
								const parserDef = parserDefStemNegativeParser;

								/*
								 * Act
								 */
								const handler = () => {
									getTemplateNameHelperInterfaceParseOutput({ parserDef });
								};

								/*
								 * Assert
								 */
								expect(handler).toThrow(errorExpected);
							});
						});
					});
				});
			});
		});
	});
});
