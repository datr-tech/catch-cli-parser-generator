import { FileExistTypeEnum } from '@app/config/enums';

export interface IFileServiceDoesFileExistOutput {
	doesExist: boolean;
	nonExistentType: FileExistTypeEnum;
}
