import { OutDirTypeEnum } from '@app/config/enums';
import { ICommonBool, ICommonPathStr } from '@app/interfaces/common';

export interface IFakeJsonDirInput {
	path?: ICommonPathStr;
	type?: OutDirTypeEnum;
	useDefaultPath?: ICommonBool;
	useDefaultType?: ICommonBool;
}
