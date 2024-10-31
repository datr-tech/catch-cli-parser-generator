import { IHelperIsJsonPropArray, IHelperIsJsonPropArrayInput } from '@app/interfaces/helpers';
import { ICommonBool } from '@app/interfaces/common';

export const isJsonPropArrayHelper: IHelperIsJsonPropArray = ({
	jsonProp,
}: IHelperIsJsonPropArrayInput): ICommonBool =>
	typeof jsonProp !== 'undefined' && Array.isArray(jsonProp);
