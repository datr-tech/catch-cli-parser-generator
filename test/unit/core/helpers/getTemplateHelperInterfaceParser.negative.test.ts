import { getTemplateHelperInterfaceParser } from '@app/core/helpers';
import { parserDefLeafNegativeParser } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterfaceParser', () => {
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
									getTemplateHelperInterfaceParser({ parserDef });
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
