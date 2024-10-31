import { hasMinimumChildrenHelper } from '@app/helpers';
import { ICommonBool } from '@app/interfaces/common';

describe('hasMinimumChildrenHelper', (): void => {
	describe('should return false', (): void => {
		test("when the received value of 'numChildren' is less than the default (of 1)", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 0;
			/*
			 * Act
			 */
			const response: ICommonBool = hasMinimumChildrenHelper({ numChildren });

			/*
			 * Assert
			 */
			expect(response).toBe(false);
		});
		test("when the received value of 'numChildren' is less than a specified minimum", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 1;
			const minimumChildrenRequired = 2;

			/*
			 * Act
			 */
			const response: ICommonBool = hasMinimumChildrenHelper({
				numChildren,
				minimumChildrenRequired,
			});

			/*
			 * Assert
			 */
			expect(response).toBe(false);
		});
	});
});
