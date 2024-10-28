import { OutDirTypeEnum } from '@app/config/enums';
import { IFileServiceDirConstructorInput } from '@app/interfaces/services/fileService/DirFileService';

export interface IFileServiceOutDirConstructorInput extends IFileServiceDirConstructorInput {
	outDirTypeEnum: OutDirTypeEnum;
}
