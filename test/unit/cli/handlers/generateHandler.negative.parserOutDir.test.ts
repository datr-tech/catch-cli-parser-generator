import { generateHandler } from '@app/cli/handlers';
import { IArgsJSON, IArgsOptions } from '@app/interfaces/args';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('negative: parserOutDir', () => {
					test("should throw an error when the code files have not be written to a non-existent dir", () => {
						/*
						 * Arrange
						 */
						const timestamp = Date.now();
						const parserOutDir = `/${timestamp}`;
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
							out: {
								parserOutDir
							}
						} as IArgsJSON;
						const options = { preFlight: false } as IArgsOptions;

						const errorExpected = "code' could not be written to 'codeFilePath'";

						/*
						 * Act
						 */
						const handler = () => {
							generateHandler({ json, options });
						};

						/*
						 * Assert
						 */
						expect(handler).toThrow(errorExpected);
					});
				});
			});
		});
	});
});
