import { codeModelBuilder } from '@app/builders';
import { ICommonBool } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { codeModelBuilderFixture } from '@test/fixtures/helpers';

describe('codeModelBuilder', (): void => {
	describe("should return the expected 'codeModel'", (): void => {
		test("when 'defModel' and 'templateDirService' are valid", (): void => {
			/*
			 * Arrange
			 */
			const { defModelValid, templateDirServiceValid, templateTypeEnum } = codeModelBuilderFixture;
			const isValidExpected = true;

			/*
			 * Act
			 */
			const codeModel: IModelCode = codeModelBuilder.build({
				defModel: defModelValid,
				templateDirService: templateDirServiceValid,
				templateTypeEnum,
			});
			const isValidFound: ICommonBool = codeModel.isValid();

			/*
			 * Assert
			 */
			expect(codeModel).toBeTruthy();
			expect(isValidFound).toBe(isValidExpected);
		});
	});
});
