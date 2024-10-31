import { OutDirTypeEnum } from '@app/config/enums';
import { IFileServiceDirConstructorInput } from 'src/interfaces/services/fileService/DirService';

export interface IFileServiceOutDirConstructorInput extends IFileServiceDirConstructorInput {
	outDirTypeEnum: OutDirTypeEnum;
}
