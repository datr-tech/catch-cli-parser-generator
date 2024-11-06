import { assertCondition, assertStr } from '@app/assertions';
import { ICommonJson } from '@app/interfaces/common';
import {
	IHelperParseJsonStr,
	IHelperParseJsonStrInput,
	IHelperParseJsonStrOutput,
} from '@app/interfaces/helpers';
import { isJsonPropArrayHelper } from './isJsonPropArrayHelper';

/**
 * @public
 *
 * Parse 'jsonStr' into 'jsonObj' and ensure that the object contains 'defs' and 'dirs' props.
 * When successful, 'jsonObj' as ICommonJson is returned.
 *
 * @param {IHelperParseJsonStrInput} args
 * @param {string} args.jsonStr
 * @returns {ICommonJson}
 *
 * @throws When jsonStr is undefined
 * @throws When jsonStr can not be parsed
 * @throws When jsonObj does not contain a valid defs array property
 * @throws When jsonObj does not contain a valid dirs array property
 */
export const jsonStrParserHelper: IHelperParseJsonStr = ({
	jsonStr,
}: IHelperParseJsonStrInput): IHelperParseJsonStrOutput => {
	let jsonObj: object;

	assertStr({ value: jsonStr, name: 'jsonStr' });

	try {
		jsonObj = JSON.parse(jsonStr);
	} catch (error) {
		const { message } = error;
		throw new Error(`Invalid 'jsonStr': ${message}`);
	}

	assertCondition({
		// @ts-ignore
		condition: isJsonPropArrayHelper({ jsonProp: jsonObj.defs }),
		errorMessage: "Invalid 'jsonObj.defs'",
	});

	assertCondition({
		// @ts-ignore
		condition: isJsonPropArrayHelper({ jsonProp: jsonObj.dirs }),
		errorMessage: "Invalid 'jsonObj.dirs'",
	});

	return jsonObj as ICommonJson;
};
