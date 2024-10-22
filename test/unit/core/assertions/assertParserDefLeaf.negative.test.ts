import { assertParserDefLeaf } from '@app/core/assertions';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefLeafNegativeTestCases } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefLeaf', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test.each(parserDefLeafNegativeTestCases)(
								'$description',
								({ errorExpected, parserDefNegative }) => {
									/*
									 * Arrange
									 */
									const parserDef: IDataParserDef = parserDefNegative;

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
