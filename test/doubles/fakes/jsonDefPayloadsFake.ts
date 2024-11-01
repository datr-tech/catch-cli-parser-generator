import { ICommonJsonDefPayload } from '@app/interfaces/common';
import { jsonDefPayloadIterFake } from './jsonDefPayloadIterFake';
import { jsonDefPayloadLeafFake } from './jsonDefPayloadLeafFake';
import { jsonDefPayloadStemFake } from './jsonDefPayloadStemFake';

export const jsonDefPayloadsFake: ICommonJsonDefPayload[] = [
	jsonDefPayloadIterFake(),
	jsonDefPayloadLeafFake(),
	jsonDefPayloadStemFake(),
];
