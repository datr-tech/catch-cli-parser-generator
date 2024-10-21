import { assertTemplatePath } from '@app/core/assertions';
import { assertTemplatePathNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertTemplatePath', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertTemplatePathNegativeTestCases)(
							'$description',
							({ errorExpected, templatePath }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertTemplatePath({ templatePath });
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
