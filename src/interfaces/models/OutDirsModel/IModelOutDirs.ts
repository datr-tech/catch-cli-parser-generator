import { ICommonFuncIsValid } from '@app/interfaces/common';
import { IModelOutDirsFuncGetFirstOutDirModelByType } from './IModelOutDirsFuncGetFirstOutDirModelByType';

export interface IModelOutDirs {
	getFirstOutDirModelByType: IModelOutDirsFuncGetFirstOutDirModelByType;
	isValid: ICommonFuncIsValid ;
}
