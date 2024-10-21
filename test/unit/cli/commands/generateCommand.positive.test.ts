import { app } from '@app/app';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('cli', () => {
		describe('commands', () => {
			describe('generateCommand', () => {
				describe('positive', () => {
					describe('should return the successfully processed args', () => {
						test("when calling the 'generate' command (via app.parse) WITH the 'pre-flight' option, preventing further processing", () => {
							/*
							 * Arrange
							 */
							const appType = 'node';
							const scriptName = 'generateCommand.positive.test.js';
							const command = 'generate';
							const jsonObj = { parserDefs: [parserCodeLeafPositive] };
							const jsonExpected = JSON.stringify(jsonObj);
							const preFlightOption = '-p';

							/*
							 * Act
							 */
							app.parse([appType, scriptName, command, jsonExpected, preFlightOption]);
							const args = app.args;
							const jsonFound = args[1];

							/*
							 * Assert
							 */
							expect(jsonFound).toBe(jsonExpected);
						});
					});
				});
			});
		});
	});
});
