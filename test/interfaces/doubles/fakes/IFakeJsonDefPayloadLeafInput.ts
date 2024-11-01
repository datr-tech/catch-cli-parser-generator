import { TemplateParserMethodEnum } from '@app/config/enums';
import { ICommonBool, ICommonJsonDefPayloadEl, ICommonNameStr } from '@app/interfaces/common';

export interface IFakeJsonDefPayloadLeafInput {
	el?: ICommonJsonDefPayloadEl;
	method?: TemplateParserMethodEnum;
	parser?: ICommonNameStr;
	useDefaultEl?: ICommonBool;
	useDefaultMethod?: ICommonBool;
	useDefaultParser?: ICommonBool;
}
