import { assertStringTemplateName } from '@app/core/assertions';
import { assertTemplateNameNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringTemplateName', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertTemplateNameNegativeTestCases)(
							'%description',
							({ errorExpected, templateName }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertStringTemplateName({ templateName });
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
