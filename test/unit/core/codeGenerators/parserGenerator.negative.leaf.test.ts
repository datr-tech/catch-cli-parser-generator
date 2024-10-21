import { parserGenerator } from '@app/core/codeGenerators';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefLeafNegativeTestCases } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
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
									const parserDef: IArgsParserDef = parserDefNegative;

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
