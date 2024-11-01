import { templateDirServiceBuilder, templateModelBuilder } from '@app/builders';
import { TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('templateModelBuilder', (): void => {
	describe('build', (): void => {
		describe("should not build a 'templateModel'", (): void => {
			test("when receiving a 'templateDirService' whose 'isValid' func (a mock) returns false", (): void => {
				/*
				 * Arrange
				 */
				const errorExpected = "Either 'dirService' or 'fileNameService' is invalid";
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateDirService: IFileServiceDir = templateDirServiceBuilder.build();
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				templateDirService.isValid = (): ICommonBool => false;

				/*
				 * Act
				 */
				const handler = (): void => {
					templateModelBuilder.build({
						defModel,
						templateDirService,
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
});
