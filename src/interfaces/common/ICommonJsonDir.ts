import { OutDirTypeEnum } from '@app/config/enums';
import { ICommonPathStr } from './ICommonPathStr';

export interface ICommonJsonDir {
	type: OutDirTypeEnum;
	path: ICommonPathStr;
}
