import { IHelperParseJsonStrInput } from './IHelperParseJsonStrInput';
import { IHelperParseJsonStrOutput } from './IHelperParseJsonStrOutput';

export interface IHelperParseJsonStr {
	(args: IHelperParseJsonStrInput): IHelperParseJsonStrOutput;
}
