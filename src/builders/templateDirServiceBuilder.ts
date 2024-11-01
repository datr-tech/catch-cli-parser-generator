import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { DirService } from '@app/services/fileService';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import {
	IBuilderTemplateDirService,
	IBuilderTemplateDirServiceFuncBuildInput,
} from '@app/interfaces/builders/templateDirServiceBuilder';

export const templateDirServiceBuilder: IBuilderTemplateDirService = {
	/**
	 * @public
	 *
	 * A func that can be used to build a DirService.
	 *
	 * @param {IBuilderTemplateDirServiceFuncBuildInput} args
	 * @param {ICommonPathStr} args.dirPathStr
	 * @returns {IFileServiceDir}
	 */
	build: ({
		dirPathStr = CONSTS_PATHS_TEMPLATES_DIR,
	}: IBuilderTemplateDirServiceFuncBuildInput = {}): IFileServiceDir => DirService({ dirPathStr }),
};
