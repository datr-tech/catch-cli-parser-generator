import { codeTemplateModelsBuilder } from '@app/builders';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import {
	DefTypeEnum,
	OutDirTypeEnum,
	TemplateParserMethodEnum,
	TemplateTypeEnum,
} from '@app/config/enums';
import { ICommonJsonDefPayloadLeaf, ICommonNameStr, ICommonPathStr } from '@app/interfaces/common';

describe('codeTemplateModelsBuilder', (): void => {
	describe('build', (): void => {
		describe("should build an object containing 'code' and 'template' models", (): void => {
			test('when receiving valid params', (): void => {
				/*
				 * Arrange
				 */
				const defTypeEnum: DefTypeEnum = DefTypeEnum.DEF_TYPE_ITER;
				const jsonDefName: ICommonNameStr = 'Test';
				const jsonPayload: ICommonJsonDefPayloadLeaf = {
					el: {
						tag: 'div',
						class: 'tstClass',
					},
					method: TemplateParserMethodEnum.GET_ATTRIBUTE_SRC,
					parser: jsonDefName,
				};
				const outDirPath: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnum: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_PARSERS;
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const { codeFilePathService, codeModel, defModel, templateDirService, templateModel } =
					codeTemplateModelsBuilder.build({
						defTypeEnum,
						jsonDefName,
						jsonPayload,
						outDirPath,
						outDirTypeEnum,
						templateTypeEnum,
					});

				/*
				 * Assert
				 */
				expect(codeFilePathService).toBeTruthy();
				expect(codeFilePathService.isValid()).toBe(true);

				expect(codeModel).toBeTruthy();
				expect(codeModel.isValid()).toBe(true);

				expect(defModel).toBeTruthy();
				expect(defModel.isValid()).toBe(true);

				expect(templateDirService).toBeTruthy();
				expect(templateDirService.isValid()).toBe(true);

				expect(templateModel).toBeTruthy();
				expect(templateModel.isValid()).toBe(true);
			});
		});
	});
});
