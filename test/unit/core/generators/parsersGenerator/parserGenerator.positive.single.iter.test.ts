import { parsersGenerator } from '@app/core/generators';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';
import { IGeneratorParsersOutputSingle } from '@app/interfaces/core/generators/parsersGenerator';
import { parserDefIterPositive } from '@test/fixtures/core/generators/parserDefs';
import { parserCodeIterPositive } from '@test/fixtures/core/generators/parserGenerator';
import {
	parseInterfaceIterPositive,
	parserInterfaceIterPositive,
	parseOutputInterfaceIterPositive,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parsersGenerator', () => {
				describe('positive.single.iter', () => {
					describe("should produce both code and interfaces based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IParserDef[] = [parserDefIterPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorParsersOutputSingle[] = parsersGenerator({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[0];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceIterPositive.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceIterPositive.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeIterPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceIterPositive.trim();

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
