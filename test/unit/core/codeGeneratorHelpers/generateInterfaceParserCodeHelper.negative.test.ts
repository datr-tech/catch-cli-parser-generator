import { generateInterfaceParserCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafNegativeParser } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParserCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'parserDef' is invalid (leaf)", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'parserDef.parser'";
								const parserDef = parserDefLeafNegativeParser;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceParserCodeHelper({ parserDef });
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
