import { DirModel } from '@app/models';

describe('DirService', () => {
	describe('constructor', () => {
		describe('should throw the expected error', () => {
			test("when the value of the received 'dirPathStr' param is an empty string", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = '';
				const errorExpected = "Invalid 'dirPathStr'";

				/*
				 * Act
				 */
				const handler = () => {
					DirModel({ dirPathStr });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when the value of the received 'dirPathStr' param is undefined", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = undefined;
				const errorExpected = "Invalid 'dirPathStr'";

				/*
				 * Act
				 */
				const handler = () => {
					DirModel({ dirPathStr });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
