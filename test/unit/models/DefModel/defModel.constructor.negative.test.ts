import { DefModel } from '@app/models';
import { ICommonJsonDef } from '@app/interfaces/common';

describe('DefModel', () => {
	describe('constructor', () => {
		describe('should throw an error', () => {
			test("when the value of 'jsonDef' is undefined", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Invalid 'jsonDef'";
				const jsonDef: ICommonJsonDef = undefined;

				/*
				 * Act
				 */
				const handler = (): void => {
					DefModel({ jsonDef });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
