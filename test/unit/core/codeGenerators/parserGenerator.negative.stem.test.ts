import { parserGenerator } from '@app/core/codeGenerators';
import { IParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefStemNegativeTestCases } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parserGenerator', () => {
				describe('stem', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test.each(parserDefStemNegativeTestCases)(
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
