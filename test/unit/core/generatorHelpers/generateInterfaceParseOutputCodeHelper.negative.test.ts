import { generateInterfaceParseOutputCodeHelper } from '@app/core/generatorHelpers';
import { parserDefLeafNegativeElClass } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
				describe('generateInterfaceParseOutputCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'parserDef' (leaf) is invalid", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'parserDef.el.class'";
								const parserDef = parserDefLeafNegativeElClass;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceParseOutputCodeHelper({
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
