import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

export interface IHelperHasAtLeastOneInvalidChildInput {
	children: IModelDef[] | IFileServiceOutDir[];
}
