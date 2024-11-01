import { ICommonJsonDir } from '@app/interfaces/common';
import { IFakeJsonDirInput } from './IFakeJsonDirInput';

export interface IFakeJsonDir {
	(args?: IFakeJsonDirInput): ICommonJsonDir;
}
