import ts from 'typescript';
import { ParserTypeEnum, IParserBuilderIterOutput } from '@datr.tech/catch-lib-parser-core';
import { parserGenerator } from '@app/core/generators';
import { IParserDefLeaf } from '@app/interfaces/core/generators/parserDefs';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserLeaf' templates", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDefLeaf = parserDefLeafPositive;

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
