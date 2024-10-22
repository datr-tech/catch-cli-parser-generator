import { assertParserDefStem } from '@app/core/assertions';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefStemNegativeTestCases } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefStem', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test.each(parserDefStemNegativeTestCases)(
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
										assertParserDefStem({ parserDef });
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
