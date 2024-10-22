import { assertStringName } from '@app/core/assertions';
import { assertStringNameNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringName', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertStringNameNegativeTestCases)(
							'$description',
							({ errorExpected, name }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertStringName({ name });
								};

								/*
								 * Assert
								 */
								expect(handler).toThrow(errorExpected);
							},
						);
					});
				});
			});
		});
	});
});
