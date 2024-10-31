import { isJsonPropArrayHelper } from '@app/helpers';
import { ICommonBool } from '@app/interfaces/common';

describe('isJsonPropArrayHelper', (): void => {
	describe('should return false', (): void => {
		test("when the received value of 'jsonProp' is undefined", (): void => {
			/*
			 * Arrange
			 */
			const jsonProp = undefined;

			/*
			 * Act
			 */
			const response: ICommonBool = isJsonPropArrayHelper({ jsonProp });

			/*
			 * Assert
			 */
			expect(response).toBe(false);
		});
	});
});
