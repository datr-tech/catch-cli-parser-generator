import { parsersGenerator } from '@app/core/codeGenerators';
import { IParserDef } from '@app/interfaces/args/parserDefs';
import { IGeneratorParsersOutputSingle } from '@app/interfaces/core/generators';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/parserGenerator';
import {
	parseInterfaceLeafPositive,
	parserInterfaceLeafPositive,
	parseOutputInterfaceLeafPositive,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parsersGenerator', () => {
				describe('positive.single.leaf', () => {
					describe("should produce both templateCodeGenerators and interfaces based upon the 'parserLeaf' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.LEAF'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IParserDef[] = [parserDefLeafPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorParsersOutputSingle[] = parsersGenerator({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[0];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceLeafPositive.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceLeafPositive.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeLeafPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceLeafPositive.trim();

							/*
							 * Assert
							 */
							expect(parseInterfaceFound).toBe(parseInterfaceExpected);
							expect(parseOutputInterfaceFound).toBe(parseOutputInterfaceExpected);
							expect(parserCodeFound).toBe(parserCodeExpected);
							expect(parserInterfaceFound).toBe(parserInterfaceExpected);
						});
					});
				});
			});
		});
	});
});
