import { parserGenerator } from '@app/core/generators';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce code based upon the 'parserLeaf' template", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.LEAF'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDefLeaf = parserDefLeafPositive;

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeLeafPositive.trim();
							/*
							 * Assert
							 */
							expect(parserCodeFound).toBe(parserCodeExpected);
						});
					});
				});
			});
		});
	});
});
