import { transformParserDefPropParserUcfirst } from '@app/core/transformers';
import { transformParserDefPropParserUcfirstNegativeTestCases } from '@test/fixtures/core/transformers';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('transformers', () => {
			describe('transformParserDefPropParserUcfirst', () => {
				describe('negative', () => {
					test.each(transformParserDefPropParserUcfirstNegativeTestCases)(
						'$description',
						({ errorExpected, parser, parserExpected }) => {
							/*
							 * Arrange
							 */
							let handler: () => void;
							let parserFound: string;
							const parserDef = { ...parserDefLeafPositive };
							parserDef.parser = parser;

							/*
							 * Act
							 */
							if (errorExpected) {
								handler = () => {
									transformParserDefPropParserUcfirst({ parserDef });
								};
							} else {
								const parserDefTransformed = transformParserDefPropParserUcfirst({ parserDef });
								const { parser } = parserDefTransformed;
								parserFound = parser;
							}

							/*
							 * Assert
							 */
							if (errorExpected) {
								expect(handler).toThrow(errorExpected);
							} else {
								expect(parserFound).toBe(parserExpected);
							}
						},
					);
				});
			});
		});
	});
});
