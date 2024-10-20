import { assertParserDefLeaf } from '@app/core/assertions';
import { IParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefLeafNegativeTestCases } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefLeaf', () => {
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
										assertParserDefLeaf({ parserDef });
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
