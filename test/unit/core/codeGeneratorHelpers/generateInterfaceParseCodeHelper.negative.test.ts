import { generateInterfaceParseCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefStemNegativeElClass } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParseCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'parserDef' is invalid (stem)", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'parserDef.el.class'";
								const parserDef = parserDefStemNegativeElClass;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceParseCodeHelper({
										parserDef,
									});
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
