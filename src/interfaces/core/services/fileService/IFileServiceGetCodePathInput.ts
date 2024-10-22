import { IDataCommonName, IDataCommonPath } from '@app/interfaces/data/common';
import { CodeTypeEnum } from '@app/config/enums';

export interface IFileServiceGetCodePathInput {
	name: IDataCommonName;
	outDir?: IDataCommonPath;
	codeType?: CodeTypeEnum;
}
