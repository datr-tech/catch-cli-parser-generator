import { ICommonBool } from '@app/interfaces/common';
import { IHelperHasMinimumChildrenInput } from './IHelperHasMinimumChildrenInput';

export interface IHelperHasMinimumChildren {
	(args: IHelperHasMinimumChildrenInput): ICommonBool;
}
