import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserDefMethodEnum, ParserDefTagEnum } from '@app/config/enums';
import { parserGenerator } from '@app/core/generators';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';
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
							const parserDef: IParserDefLeaf = {
								el: {
									class: 'MOCK',
									tag: ParserDefTagEnum.DIV,
								},
								parser: 'mock',
								method: ParserDefMethodEnum.INNER_TEXT,
								type: ParserTypeEnum.LEAF,
							};

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
