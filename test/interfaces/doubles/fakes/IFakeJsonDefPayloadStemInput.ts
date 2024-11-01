import { TemplateParserMethodEnum } from '@app/config/enums';
import {
	ICommonBool,
	ICommonJsonDefPayloadEl,
	ICommonJsonDefPayloadStemChildParser,
	ICommonNameStr,
} from '@app/interfaces/common';

export interface IFakeJsonDefPayloadStemInput {
	childParsers?: ICommonJsonDefPayloadStemChildParser[];
	el?: ICommonJsonDefPayloadEl;
	method?: TemplateParserMethodEnum;
	parser?: ICommonNameStr;
	useDefaultChildParsers?: ICommonBool;
	useDefaultEl?: ICommonBool;
	useDefaultMethod?: ICommonBool;
	useDefaultParser?: ICommonBool;
}
