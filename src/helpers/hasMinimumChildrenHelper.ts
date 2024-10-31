import { CONSTS_CHILDREN_MINIMUM_NUM } from '@app/config/consts/children';
import { ICommonBool } from '@app/interfaces/common';
import { IHelperHasMinimumChildren, IHelperHasMinimumChildrenInput } from '@app/interfaces/helpers';

export const hasMinimumChildrenHelper: IHelperHasMinimumChildren = ({
	numChildren,
	minimumChildrenRequired = CONSTS_CHILDREN_MINIMUM_NUM,
}: IHelperHasMinimumChildrenInput): ICommonBool => numChildren >= minimumChildrenRequired;
