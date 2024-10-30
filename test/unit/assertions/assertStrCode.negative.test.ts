import { assertStrCode } from '@app/assertions';
import { ICommonCodeStr } from '@app/interfaces/common';

describe('assertStrCode', (): void => {
	describe('should throw the expected error', (): void => {
		test("when 'code' is an empty string", (): void => {
			/*
			 * Arrange
			 */
			const code: ICommonCodeStr = '';
			const errorExpected = "Invalid 'code'";

			/*
			 * Act
			 */
			const handler = (): void => {
				assertStrCode({ code });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'code' is undefined", (): void => {
			/*
			 * Arrange
			 */
			const code: ICommonCodeStr = undefined;
			const errorExpected = "Invalid 'code'";

			/*
			 * Act
			 */
			const handler = (): void => {
				assertStrCode({ code });
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
