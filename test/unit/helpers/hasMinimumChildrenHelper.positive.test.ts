import { hasMinimumChildrenHelper } from '@app/helpers';
import { ICommonBool } from '@app/interfaces/common';

describe('hasMinimumChildrenHelper', (): void => {
	describe('should return true', (): void => {
		test("when the received value of 'numChildren' is equal to the default (of 1)", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 1;
			/*
			 * Act
			 */
			const response: ICommonBool = hasMinimumChildrenHelper({ numChildren });

			/*
			 * Assert
			 */
			expect(response).toBe(true);
		});
		test("when the received value of 'numChildren' is greater than the default (of 1)", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 2;
			/*
			 * Act
			 */
			const response: ICommonBool = hasMinimumChildrenHelper({ numChildren });

			/*
			 * Assert
			 */
			expect(response).toBe(true);
		});
		test("when the received value of 'numChildren' is equal to a specified minimum", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 2;
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
			expect(response).toBe(true);
		});
		test("when the received value of 'numChildren' is greater than a specified minimum", (): void => {
			/*
			 * Arrange
			 */
			const numChildren = 3;
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
			expect(response).toBe(true);
		});
	});
});
