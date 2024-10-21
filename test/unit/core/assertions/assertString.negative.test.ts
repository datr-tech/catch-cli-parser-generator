import { assertString } from '@app/core/assertions';
import { assertStringNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertString', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertStringNegativeTestCases)(
							'$description',
							({ errorExpected, name, value }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertString({ name, value });
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
