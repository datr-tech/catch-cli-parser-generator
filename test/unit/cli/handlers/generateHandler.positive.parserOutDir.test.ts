import { generateHandler } from '@app/cli/handlers';
import { parsersGenerator } from '@app/core/codeGenerators';
import { doesFileExist } from '@app/core/services/fileService';
import { IArgsJSON, IArgsOptions } from '@app/interfaces/args';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';

const parserOutDir = './';
const parserCodePathLeaf = `${parserOutDir}/leaf.ts`;
const parserCodePathStem = `${parserOutDir}/stem.ts`;

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('positive: parserOutDir', () => {
					afterAll(() => {
						global.jestRemoveFileSync(parserCodePathLeaf);
						global.jestRemoveFileSync(parserCodePathStem);
					});
					test("should generate two code files to 'parserOutDir'", () => {
						/*
						 * Arrange
						 */
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
							out: {
								parserOutDir
							}
						} as IArgsJSON;
						const options = { preFlight: false } as IArgsOptions;

						/*
						 * Act
						 */
						const response = generateHandler({ json, options, generator: parsersGenerator });
						const { doesExist: doesExistParserCodeFileLeaf } = doesFileExist({
							filePath: parserCodePathLeaf,
						});
						const { doesExist: doesExistParserCodeFileStem } = doesFileExist({
							filePath: parserCodePathStem,
						});
						/*
						 * Assert
						 */
						expect(response).toBeUndefined();
						expect(doesExistParserCodeFileLeaf).toBe(true);
						expect(doesExistParserCodeFileStem).toBe(true);
					});
				});
			});
		});
	});
});
