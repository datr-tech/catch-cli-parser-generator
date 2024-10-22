import { generateParser } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefStemNegativeTestCases } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('stem', () => {
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
										generateParser({ parserDef });
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
