import { assertStringParserName } from '@app/core/assertions';
import { assertParserNameNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringParserName', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertParserNameNegativeTestCases)(
							'%description',
							({ errorExpected, parserName }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertStringParserName({ parserName });
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
