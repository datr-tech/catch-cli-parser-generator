import { generateInterfaceParseCodeHelper } from '@app/core/generatorHelpers';
import { parserDefStemNegativeElClass } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
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
