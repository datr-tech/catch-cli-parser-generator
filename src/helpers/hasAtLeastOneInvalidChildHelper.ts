import { ICommonBool } from '@app/interfaces/common';
import {
	IHelperHasAtLeastOneInvalidChild,
	IHelperHasAtLeastOneInvalidChildInput,
} from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';

export const hasAtLeastOneInvalidChildHelper: IHelperHasAtLeastOneInvalidChild = ({
	children,
}: IHelperHasAtLeastOneInvalidChildInput): ICommonBool =>
	!!children.find((model: IModelDef): ICommonBool => model.isValid() === false);
