import { assertTemplateName } from '@app/core/assertions';
import { assertTemplateNameNegativeTestCases } from '@test/fixtures/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertTemplateName', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test.each(assertTemplateNameNegativeTestCases)(
							'%description',
							({ errorExpected, templateName }) => {
								/*
								 * Act
								 */
								const handler = () => {
									assertTemplateName({ templateName });
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
