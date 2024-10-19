import * as ts from 'typescript';
import {
	ParserTypeEnum,
	IParserBuilderIterOutput,
} from '@datr.tech/catch-lib-parser-core';
import { ParserMethodEnum, ParserTagEnum } from '@app/config/enums';
import { parserGenerator } from '@app/core/generators';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserLeaf' template", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDefLeaf = {
								el: {
									class: 'leaf',
									tag: ParserTagEnum.DIV,
								},
								parser: 'leaf',
								method: ParserMethodEnum.INNER_TEXT,
								type: ParserTypeEnum.LEAF,
							};

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
							const parserCodeLeafJavaScript = ts.transpile(parserCode);
							const parser: IParserBuilderIterOutput = eval(parserCodeLeafJavaScript);

							/*
							 * Assert
							 */
							expect(typeof parser.parse).toBe('function');
							expect(parser.parserType).toBe(ParserTypeEnum.LEAF);

							const elNameExpected = `${parserDef.el.tag}.${parserDef.el.class}`;
							expect(parser.elName).toBe(elNameExpected);
						});
					});
				});
			});
		});
	});
});
