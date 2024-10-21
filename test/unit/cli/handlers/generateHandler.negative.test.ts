import { generateHandler } from '@app/cli/handlers';
import { IArgsJSON, IArgsOptions } from '@app/interfaces/args';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';
import { parserWriter } from '@app/core/writers';

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('negative', () => {
					test('should throw an error when the code files have not be written', () => {
						/*
						 * Arrange
						 */
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
						} as IArgsJSON;
						const options = { preFlight: false } as IArgsOptions;

						const errorExpected = 'At least one parser wrapper could not be written';
						const writer = { ...parserWriter };
						writer.validate = () => false;

						/*
						 * Act
						 */
						const handler = () => {
							generateHandler({ json, options, writer });
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
