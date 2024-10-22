import { transformParserDefPropParserUcfirst } from '@app/core/transformers';
import { transformParserDefPropParserUcfirstPositiveTestCases } from '@test/fixtures/core/transformers';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('transformers', () => {
			describe('transformParserDefPropParserUcfirst', () => {
				describe('positive', () => {
					test.each(transformParserDefPropParserUcfirstPositiveTestCases)(
						'$description',
						({ parser, parserExpected }) => {
							/*
							 * Arrange
							 */
							const parserDef = { ...parserDefLeafPositive };
							parserDef.parser = parser;

							/*
							 * Act
							 */
							const parserDefTransformed = transformParserDefPropParserUcfirst({ parserDef });
							const { parser: parserFound } = parserDefTransformed;

							/*
							 * Assert
							 */
							expect(parserFound).toBe(parserExpected);

							/*
							 * Ensure that transformed parserDefs are clones
							 * and the original has not been updated
							 */
							if (parserFound === parser) {
								expect(parserDefTransformed).not.toBe(parserDef);
								expect(parserDefTransformed).toStrictEqual(parserDef);
							}
						},
					);
				});
			});
		});
	});
});
