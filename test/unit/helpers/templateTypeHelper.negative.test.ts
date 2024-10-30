import { TemplateTypeEnum } from '@app/config/enums';
import { templateTypeHelper } from '@app/helpers';

describe('templateTypeHelper', (): void => {
	describe('should throw the expected error', (): void => {
		test("when 'templateTypeEnum' is unknown", (): void => {
			/*
			 * Assert
			 */
			const errorExpected = "Unknown 'templateTypeEnum'";
			const unknownTemplateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_UNK;

			/*
			 * Act
			 */
			const handler = (): void => {
				templateTypeHelper.getOutDirType({
					templateTypeEnum: unknownTemplateTypeEnum,
				});
			};

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
