import { interfaceGenerator } from '@app/core/generators';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';
import { parserDefIterPositive } from '@test/fixtures/core/generators/parserDefs';
import {
	parseInterfaceIterPositive,
	parseOutputInterfaceIterPositive,
	parserInterfaceIterPositive,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('interfaceGenerator', () => {
				describe('positive', () => {
					describe("should produce interfaces based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDef = parserDefIterPositive;

							/*
							 * Act
							 */
							const { parseOutputInterface, parseInterface, parserInterface } = interfaceGenerator({
								parserDef,
							});

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceIterPositive.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceIterPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceIterPositive.trim();

							/*
							 * Assert
							 */
							expect(parseInterfaceFound).toBe(parseInterfaceExpected);
							expect(parseOutputInterfaceFound).toBe(parseOutputInterfaceExpected);
							expect(parserInterfaceFound).toBe(parserInterfaceExpected);
						});
					});
				});
			});
		});
	});
});
