import { parserDefStemNegativeParser } from '@test/fixtures/args/parserDefs';
import { getInterfaceParseOutputTemplateName } from '@app/core/services/templateService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getInterfaceParseOutputTemplateName', () => {
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
									getInterfaceParseOutputTemplateName({ parserDef });
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
