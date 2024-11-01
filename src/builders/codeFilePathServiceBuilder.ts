import { OutDirTypeEnum } from '@app/config/enums';
import { templateTypeHelper } from '@app/helpers';
import {
	IBuilderCodeFilePathService,
	IBuilderCodeFilePathServiceFuncBuildInput,
	IBuilderCodeFilePathServiceFuncBuildOutput,
} from '@app/interfaces/builders/codeFilePathServiceBuilder';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { CodeFileNameService, CodeFilePathService } from '@app/services/fileService';
import { assertCondition } from '@app/assertions';

export const codeFilePathServiceBuilder: IBuilderCodeFilePathService = {
	build: ({
		defModel,
		outDirsModel,
		templateTypeEnum,
		templateHelper = templateTypeHelper,
	}: IBuilderCodeFilePathServiceFuncBuildInput): IBuilderCodeFilePathServiceFuncBuildOutput => {
		assertCondition({
			condition: defModel.isValid() && outDirsModel.isValid(),
			errorMessage: "Either the 'defModel' or the 'outDirsModel' is invalid",
		});

		const outDirType: OutDirTypeEnum = templateHelper.getOutDirType({ templateTypeEnum });
		const dirService: IFileServiceDir = outDirsModel.getFirstOutDirModelByType({ outDirType });

		const fileNameService: IFileServiceFileName = CodeFileNameService({
			defModel,
			templateTypeEnum,
		});

		return CodeFilePathService({
			dirService,
			fileNameService,
		});
	},
};
