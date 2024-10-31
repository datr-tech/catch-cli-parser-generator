import { ICommonBool } from '@app/interfaces/common';
import { IHelperHasAtLeastOneInvalidChildInput } from './IHelperHasAtLeastOneInvalidChildInput';

export interface IHelperHasAtLeastOneInvalidChild {
	(args: IHelperHasAtLeastOneInvalidChildInput): ICommonBool;
}
