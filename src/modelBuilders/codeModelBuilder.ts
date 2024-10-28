import { CodeFileNameModel, CodeFilePathModel } from '@app/models';
import { templateTypeHelper } from '@app/helpers';
import { IBuilderCodeModel } from '@app/interfaces/modelBuilders/codeModelBuilder';

export const codeModelBuilder: IBuilderCodeModel = {
	build: ({ defModel, outDirsModel, templateModel, templateTypeEnum }) => {
		const outDirType = templateTypeHelper.getOutDirType({ templateTypeEnum });

		const codeDirModel = outDirsModel.getDirByType({ outDirType });
		const codeFileNameModel = CodeFileNameModel({ defModel, templateTypeEnum });

		const codePathModel = CodeFilePathModel({
			dirModel: codeDirModel,
			fileNameModel: codeFileNameModel,
		});
		const codeModel = templateModel.getCodeModel({ defModel });
		codeModel.writeCodeToPath({ codePathModel });
	},
};
