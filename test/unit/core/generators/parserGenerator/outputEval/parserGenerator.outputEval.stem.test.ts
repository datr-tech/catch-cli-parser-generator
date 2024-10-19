import * as ts from 'typescript';
import {
	ParserTypeEnum,
	IParserBuilderIterOutput,
} from '@datr.tech/catch-lib-parser-core';
import { ParserTagEnum } from '@app/config/enums';
import { parserGenerator } from '@app/core/generators';
import { IParserDefStem } from '@app/interfaces/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserStem' template", () => {
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
							const parserCodeStemJavaScript = ts.transpile(parserCode);
							const parser: IParserBuilderIterOutput = eval(parserCodeStemJavaScript);

							/*
							 * Assert
							 */
							expect(typeof parser.parse).toBe('function');
							expect(parser.parserType).toBe(ParserTypeEnum.STEM);

							const elNameExpected = `${parserDef.el.tag}.${parserDef.el.class}`;
							expect(parser.elName).toBe(elNameExpected);
						});
					});
				});
			});
		});
	});
});
