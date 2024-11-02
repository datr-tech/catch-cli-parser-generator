import { deriveFileNamesCodeHelper } from '@app/helpers';
import { IHelperDeriveFileNamesOutputElement } from '@app/interfaces/helpers';

describe('deriveFileNamesCodeHelper', () => {
	describe("should return the expected set of 'codeFileNames'", () => {
		test("when 'defNameStr' is valid", () => {
			/*
			 * Arrange
			 */
			const defNameStr = 'Test';

			/*
			 * Act
			 */
			const codeFileNamesFound: IHelperDeriveFileNamesOutputElement[] = deriveFileNamesCodeHelper({
				defNameStr,
			});

			/*
			 * Assert
			 */
			expect(codeFileNamesFound.length).toBeGreaterThan(0);
		});
	});
});
