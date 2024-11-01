import { codeModelBuilder } from '@app/builders';
import { codeModelBuilderFixture } from '@test/fixtures/helpers';

describe('codeModelBuilder', (): void => {
	describe('should throw the expected error', (): void => {
		test("when 'defModel' is invalid", (): void => {
			/*
			 * Arrange
			 */
			const { defModelInvalid, templateDirServiceValid, templateTypeEnum } =
				codeModelBuilderFixture;
			const errorExpected = "Either 'defModel' or 'templateDirService' is invalid";

			/*
			 * Act
			 */
			const handler = (): void => {
				codeModelBuilder.build({
					defModel: defModelInvalid,
					templateDirService: templateDirServiceValid,
					templateTypeEnum,
				});
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'templateDirService' is invalid", (): void => {
			/*
			 * Arrange
			 */
			const { defModelValid, templateDirServiceInvalid, templateTypeEnum } =
				codeModelBuilderFixture;
			const errorExpected = "Either 'defModel' or 'templateDirService' is invalid";

			/*
			 * Act
			 */
			const handler = (): void => {
				codeModelBuilder.build({
					defModel: defModelValid,
					templateDirService: templateDirServiceInvalid,
					templateTypeEnum,
				});
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
