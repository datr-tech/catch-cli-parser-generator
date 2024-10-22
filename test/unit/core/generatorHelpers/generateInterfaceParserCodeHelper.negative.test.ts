import { generateInterfaceParserCodeHelper } from '@app/core/generatorHelpers';
import { parserDefLeafNegativeParser } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
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
