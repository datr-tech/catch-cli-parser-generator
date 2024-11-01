import { assertCondition } from '@app/assertions';
import {
	codeFilePathServiceBuilder,
	codeModelBuilder,
	templateDirServiceBuilder,
	templateModelBuilder,
} from '@app/builders';
import { DefModel, OutDirsModel } from '@app/models';
import {
	IBuilderCodeTemplateModels,
	IBuilderCodeTemplateModelsFuncBuildInput,
	IBuilderCodeTemplateModelsFuncBuildOutput,
} from '@app/interfaces/builders/codeTemplateModelsBuilder';
import { ICommonJson, ICommonJsonDef, ICommonJsonDir } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

export const codeTemplateModelsBuilder: IBuilderCodeTemplateModels = {
	build: ({
		defTypeEnum,
		jsonDefName,
		jsonPayload,
		outDirPath,
		outDirTypeEnum,
		templateTypeEnum,
	}: IBuilderCodeTemplateModelsFuncBuildInput): IBuilderCodeTemplateModelsFuncBuildOutput => {
		assertCondition({
			condition: !!jsonDefName && !!outDirPath,
			errorMessage: "'jsonDefName' or 'outDirPath' is invalid",
		});

		const jsonDef: ICommonJsonDef = {
			name: jsonDefName,
			payload: jsonPayload,
			type: defTypeEnum,
		};

		const jsonDir: ICommonJsonDir = {
			path: outDirPath,
			type: outDirTypeEnum,
		};

		const json: ICommonJson = {
			defs: [jsonDef],
			dirs: [jsonDir],
		};

		const defModel: IModelDef = DefModel({ jsonDef });
		const outDirsModels: IModelOutDirs = OutDirsModel({ json });

		const codeFilePathService: IFileServiceFilePath = codeFilePathServiceBuilder.build({
			defModel: defModel,
			outDirsModel: outDirsModels,
			templateTypeEnum,
		});

		const templateDirService: IFileServiceDir = templateDirServiceBuilder.build();

		const templateModel: IModelTemplate = templateModelBuilder.build({
			defModel,
			templateDirService,
			templateTypeEnum,
		});

		const codeModel: IModelCode = codeModelBuilder.build({
			defModel,
			templateDirService,
			templateTypeEnum,
		});

		return {
			codeFilePathService,
			codeModel,
			defModel,
			templateDirService,
			templateModel,
		};
	},
};
