import { OutDirTypeEnum } from '@app/config/enums';
import { IFileServiceDirConstructorInput } from 'src/interfaces/services/fileService/DirFileService';

export interface IModelOutDirConstructorInput extends IFileServiceDirConstructorInput {
	outDirTypeEnum: OutDirTypeEnum;
}
