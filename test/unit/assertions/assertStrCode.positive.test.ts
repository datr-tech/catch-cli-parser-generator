import { assertStrCode } from '@app/assertions';
import { ICommonCodeStr } from '@app/interfaces/common';

describe('assertStrCode', (): void => {
	describe('should return undefined', (): void => {
		test("when 'code' is a truthy string", (): void => {
			/*
			 * Arrange
			 */
			const code: ICommonCodeStr = 'TEST_CODE_STRING';

			/*
			 * Act
			 */
			const response: void = assertStrCode({ code });

			/*
			 * Assert
			 */
			expect(response).toBeUndefined();
		});
	});
});
