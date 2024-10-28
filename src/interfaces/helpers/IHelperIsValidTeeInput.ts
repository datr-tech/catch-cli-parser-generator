import { ICommonValidityFlag } from '@app/interfaces/common';

export interface IHelperIsValidTeeInput {
	condition: boolean;
	validityFlagToUpdate?: ICommonValidityFlag;
}
