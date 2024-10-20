import { assertParserDefStem } from '@app/core/assertions';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefStemNegativeTestCases } from '@test/fixtures/args/parserDefs';

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
									const parserDef: IArgsParserDef = parserDefNegative;

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
