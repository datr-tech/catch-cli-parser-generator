import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { ParserTagEnum } from '@app/config/enums';
import { parserGenerator } from '@app/core/generators';
import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce code based upon the 'parserStem' template", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.STEM'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDefStem = {
								childParserWrappers: [
									{
										ref: 'name',
										childParser: 'name',
									},
									{
										ref: 'nameHref',
										childParser: 'nameHref',
									},
									{
										ref: 'title',
										childParser: 'title',
									},
								],
								el: {
									class: 'stem',
									tag: ParserTagEnum.SPAN,
								},
								parser: 'stem',
								type: ParserTypeEnum.STEM,
							};

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();

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
