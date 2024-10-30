import { assertStr } from '@app/assertions';
import { ICommonStr } from '@app/interfaces/common';

describe('assertStr', (): void => {
	describe('should throw the expected error', (): void => {
		test("when 'value' is undefined", (): void => {
			/*
			 * Arrange
			 */
			const value: ICommonStr = undefined;
			const errorExpected = "Invalid 'string'";
			/*
			 * Act
			 */
			const handler = (): void => {
				assertStr({ value });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'value' is an empty string", (): void => {
			/*
			 * Arrange
			 */
			const value: ICommonStr = '';
			const errorExpected = "Invalid 'string'";
			/*
			 * Act
			 */
			const handler = (): void => {
				assertStr({ value });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'value' is an empty string and 'name' has been received", (): void => {
			/*
			 * Arrange
			 */
			const name: ICommonStr = 'TEST_NAME';
			const value: ICommonStr = '';
			const errorExpected = `Invalid '${name}'`;
			/*
			 * Act
			 */
			const handler = (): void => {
				assertStr({ value, name });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'value' is undefined and 'name' has been received, but is an empty string", (): void => {
			/*
			 * Arrange
			 */
			const name: ICommonStr = '';
			const value: ICommonStr = undefined;
			const errorExpected = `Invalid 'string'`;
			/*
			 * Act
			 */
			const handler = (): void => {
				assertStr({ value, name });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
