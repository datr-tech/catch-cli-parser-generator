import { parsersGenerator } from '@app/core/generators';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';
import { IGeneratorParsersOutputSingle } from '@app/interfaces/core/generators/parsersGenerator';
import {
	parserDefLeafPositive,
	parserDefStemPositive,
} from '@test/fixtures/core/generators/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/parserGenerator';
import {
	parseInterfaceStemPositive,
	parserInterfaceStemPositive,
	parseOutputInterfaceStemPositive,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parsersGenerator', () => {
				describe('positive.multiple', () => {
					describe('should produce both code and interfaces', () => {
						test("based upon the 'parserLeaf' and the 'parserStem' templates", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IParserDef[] = [parserDefLeafPositive, parserDefStemPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorParsersOutputSingle[] = parsersGenerator({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[1];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceStemPositive.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceStemPositive.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceStemPositive.trim();

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
