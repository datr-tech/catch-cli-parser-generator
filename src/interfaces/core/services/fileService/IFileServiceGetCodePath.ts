import { IDataCommonBaseString } from '@app/interfaces/data/common';
import { IFileServiceGetCodePathInput } from './IFileServiceGetCodePathInput';

export interface IFileServiceGetCodePath {
	(args: IFileServiceGetCodePathInput): IDataCommonBaseString;
}
