import { generateCode } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { IGeneratorCodeOutputSingle } from '@app/interfaces/core/generators';
import { parserDefStemPositive } from '@test/fixtures/data/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/generateParser';
import {
	parseInterfaceStemPositiveUcfirst,
	parserInterfaceStemPositiveUcfirst,
	parseOutputInterfaceStemPositiveUcfirst,
} from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateCode', () => {
				describe('positive.single.stem', () => {
					describe("should produce both templateCodeGenerators and interfaces based upon the 'parserStem' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.STEM'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IDataParserDef[] = [parserDefStemPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorCodeOutputSingle[] = generateCode({ parserDefs });
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
