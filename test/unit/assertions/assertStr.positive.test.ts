import { assertStr } from '@app/assertions';
import { ICommonStr } from '@app/interfaces/common';

describe('assertStr', (): void => {
	describe('should return undefined', (): void => {
		test("when 'value' is a truthy string", (): void => {
			/*
			 * Arrange
			 */
			const value: ICommonStr = 'TEST_STRING';

			/*
			 * Act
			 */
			const response: void = assertStr({ value });

			/*
			 * Assert
			 */
			expect(response).toBeUndefined();
		});
		test("when 'value' is a truthy string and 'name' has been received", (): void => {
			/*
			 * Arrange
			 */
			const value: ICommonStr = 'TEST_STRING';
			const name = 'TEST_NAME';

			/*
			 * Act
			 */
			const response: void = assertStr({ value, name });

			/*
			 * Assert
			 */
			expect(response).toBeUndefined();
		});
		test("when 'value' is a truthy string and 'name' has been received, but 'name' is an empty string", (): void => {
			/*
			 * Arrange
			 */
			const value: ICommonStr = 'TEST_STRING';
			const name = '';

			/*
			 * Act
			 */
			const response: void = assertStr({ value, name });

			/*
			 * Assert
			 */
			expect(response).toBeUndefined();
		});
	});
});
