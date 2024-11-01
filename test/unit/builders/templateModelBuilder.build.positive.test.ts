import { templateDirServiceBuilder, templateModelBuilder } from '@app/builders';
import { DefModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { jsonDefFake } from '@test/doubles/fakes';
import { TemplateTypeEnum } from '@app/config/enums';

describe('templateModelBuilder', (): void => {
	describe('build', (): void => {
		describe("should build a 'templateModel'", (): void => {
			test("when receiving a 'defModel', a 'templateDirService' and a 'templateTypeEnum' that construct a valid' templatePathService'", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = true;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateDirService: IFileServiceDir = templateDirServiceBuilder.build();
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const templateModel: IModelTemplate = templateModelBuilder.build({
					defModel,
					templateDirService,
					templateTypeEnum,
				});
				const isValidFound: ICommonBool = templateModel.isValid();

				/*
				 * Assert
				 */
				expect(templateModel).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
			});
		});
	});
});
