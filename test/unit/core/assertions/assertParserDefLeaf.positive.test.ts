import { assertParserDefLeaf } from '@app/core/assertions';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefLeaf', () => {
					describe('positive', () => {
						describe('should return undefined', () => {
							test("when 'parserDef' (leaf) is valid", () => {
								/*
								 * Arrange
								 */
								const parserDef: IDataParserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const response = assertParserDefLeaf({ parserDef });

								/*
								 * Assert
								 */
								expect(response).toBeUndefined();
							});
							test("when 'parserDef.type' is NOT equal to ParserTypeEnum.LEAF", () => {
								/*
								 * Arrange
								 */
								const parserDef: IDataParserDef = parserDefStemPositive;

								/*
								 * Act
								 */
								const response = assertParserDefLeaf({ parserDef });

								/*
								 * Assert
								 */
								expect(response).toBeUndefined();
							});
						});
					});
				});
			});
		});
	});
});
