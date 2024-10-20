import { getTemplateHelperInterfaceParse } from '@app/core/helpers';
import { parserDefStemNegativeElClass } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterfaceParse', () => {
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
									getTemplateHelperInterfaceParse({
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
