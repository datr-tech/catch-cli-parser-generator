import { parserGenerator } from '@app/core/generators';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';
import { parserDefLeafNegativeTestCases } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('leaf', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test.each(parserDefLeafNegativeTestCases)(
								'%description',
								({ errorExpected, parserDefNegative }) => {
									/*
									 * Arrange
									 */
									const parserDef: IParserDef = parserDefNegative;

									/*
									 * Act
									 */
									const handler = () => {
										parserGenerator({ parserDef });
									};

									/*
									 * Assert
									 */
									expect(handler).toThrow(errorExpected);
								},
							);
						});
					});
				});
			});
		});
	});
});
