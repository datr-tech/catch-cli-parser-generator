import { IModelDef } from '@app/interfaces/models/DefModel';
import { IHelperDeriveFileNameInputCommon } from './IHelperDeriveFileNameInputCommon';

export interface IHelperDeriveFileNameInput extends IHelperDeriveFileNameInputCommon {
	defModel: IModelDef;
}
