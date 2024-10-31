import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IModelOutDirsFuncGetFirstOutDirModelByType } from './IModelOutDirsFuncGetFirstOutDirModelByType';
import { IModelOutDirsFuncGetNumOutDirModels } from './IModelOutDirsFuncGetNumOutDirModels';

export interface IModelOutDirs {
	getFirstOutDirModelByType: IModelOutDirsFuncGetFirstOutDirModelByType;
	isValid: ICommonFuncIsValid;
	getNumOutDirModels: IModelOutDirsFuncGetNumOutDirModels;
}
