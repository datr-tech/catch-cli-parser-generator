import { CONSTS_PATHS_TEMPLATE_DIR } from '@app/config/consts/paths';
import { DirModel } from '@app/models';
import { IBuilderDirModelBuilder } from '@app/interfaces/modelBuilders/templateDirModelBuilder';

export const templateDirModelBuilder: IBuilderDirModelBuilder = {
	build: ({ dirPathStr = CONSTS_PATHS_TEMPLATE_DIR }) => {
		return DirModel({ dirPathStr });
	},
};
