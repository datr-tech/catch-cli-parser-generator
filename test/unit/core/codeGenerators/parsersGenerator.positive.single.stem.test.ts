import { parsersGenerator } from '@app/core/codeGenerators';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { IGeneratorParsersOutputSingle } from '@app/interfaces/core/generators';
import { parserDefStemPositive } from '@test/fixtures/args/parserDefs';
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
				describe('positive.single.stem', () => {
					describe("should produce both templateCodeGenerators and interfaces based upon the 'parserStem' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.STEM'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IArgsParserDef[] = [parserDefStemPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorParsersOutputSingle[] = parsersGenerator({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[0];

							// parseInterface
							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceStemPositiveUcfirst.trim();

							// parseOutputInterface
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceStemPositiveUcfirst.trim();

							// parseCode
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();

							// parserInterface
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
