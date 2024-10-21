import { parsersGenerator } from '@app/core/codeGenerators';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { IGeneratorParsersOutputSingle } from '@app/interfaces/core/generators';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/parserGenerator';
import {
	parseInterfaceStemPositiveUcfirst,
	parserInterfaceStemPositiveUcfirst,
	parseOutputInterfaceStemPositiveUcfirst,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parsersGenerator', () => {
				describe('positive.multiple', () => {
					describe('should produce both templateCodeGenerators and interfaces', () => {
						test("based upon the 'parserLeaf' and the 'parserStem' templates", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IArgsParserDef[] = [parserDefLeafPositive, parserDefStemPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorParsersOutputSingle[] = parsersGenerator({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[1];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceStemPositiveUcfirst.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceStemPositiveUcfirst.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceStemPositiveUcfirst.trim();

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
