import { assertPath } from '@app/core/assertions';
import { assertPathNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertPath', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertPathNegativeTestCases)('$description', ({ errorExpected, path }) => {
							/*
							 * Act
							 */
							const handler = () => {
								assertPath({ path });
							};

							/*
							 * Assert
							 */
							expect(handler).toThrow(errorExpected);
						});
					});
				});
			});
		});
	});
});
