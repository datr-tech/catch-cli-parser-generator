import { ICommonBool, ICommonNameStr } from '@app/interfaces/common';

export interface IFakeJsonDefPayloadIterInput {
	childParser?: ICommonNameStr;
	parser?: ICommonNameStr;
	useDefaultChildParser?: ICommonBool;
	useDefaultEl?: ICommonBool;
	useDefaultParser?: ICommonBool;
}
