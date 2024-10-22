import { IDataCommonDoesExist } from '@app/interfaces/data/common';
import { FileExistTypeEnum } from '@app/config/enums';

export interface IFileServiceDoesFileExistOutput {
	doesExist: IDataCommonDoesExist;
	nonExistentType: FileExistTypeEnum;
}
