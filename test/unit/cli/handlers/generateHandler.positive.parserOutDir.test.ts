import { generateHandler } from '@app/cli/handlers';
import { generateCode } from '@app/core/generators';
import { doesFileExist } from '@app/core/services/fileService';
import { ICliCommonGenerateOptions } from '@app/interfaces/cli/commands';
import { IDataJSON } from '@app/interfaces/data';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';

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
								parserOutDir,
							},
						} as IDataJSON;
						const options = { preFlight: false } as ICliCommonGenerateOptions;

						/*
						 * Act
						 */
						const response = generateHandler({ json, options, generator: generateCode });
						const { doesExist: doesExistParserCodeFileLeaf } = doesFileExist({
							path: parserCodePathLeaf,
						});
						const { doesExist: doesExistParserCodeFileStem } = doesFileExist({
							path: parserCodePathStem,
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
