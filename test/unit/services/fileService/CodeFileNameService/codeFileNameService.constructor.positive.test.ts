import { DefModel } from '@app/models';
import { CodeFileNameService } from '@app/services/fileService';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';
import { TemplateTypeEnum } from '@app/config/enums';

describe('CodeFileNameService', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when receiving a valid 'defModel' and a 'templateTypeEnum", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const codeFileNameService: IFileServiceFileName = CodeFileNameService({
					defModel,
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(codeFileNameService).toBeTruthy();
			});
		});
	});
});
