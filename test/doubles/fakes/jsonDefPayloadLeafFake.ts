import { TemplateParserMethodEnum } from '@app/config/enums';
import {
	ICommonBool,
	ICommonJsonDefPayloadEl,
	ICommonJsonDefPayloadLeaf,
	ICommonNameStr,
} from '@app/interfaces/common';
import {
	IFakeJsonDefPayloadLeaf,
	IFakeJsonDefPayloadLeafInput,
} from '@test/interfaces/doubles/fakes';

/**
 * @public
 *
 * Retrieve a fake jsonDefPayload leaf object.
 *
 * @param {IFakeJsonDefInput)} args
 * @param {ICommonJsonDefPayloadEl} args.el
 * @param {ICommonNameStr} args.method
 * @param {ICommonNameStr} args.parser
 * @param {ICommonBool} args.useDefaultEl
 * @param {ICommonBool} args.useDefaultMethod
 * @param {ICommonBool} args.useDefaultParser
 * @returns {ICommonJsonDefPayloadLeaf}
 */
export const jsonDefPayloadLeafFake: IFakeJsonDefPayloadLeaf = ({
	el,
	method,
	parser,
	useDefaultEl = true,
	useDefaultMethod = true,
	useDefaultParser = true,
}: IFakeJsonDefPayloadLeafInput = {}): ICommonJsonDefPayloadLeaf => {
	let elResolved: ICommonJsonDefPayloadEl | undefined = el;
	let methodResolved: TemplateParserMethodEnum | undefined = method;
	let parserResolved: ICommonNameStr | undefined = parser;

	if ((useDefaultEl as ICommonBool) && !el) {
		elResolved = {
			class: 'test-leaf',
			tag: 'div',
		};
	}

	if ((useDefaultMethod as ICommonBool) && !method) {
		methodResolved = TemplateParserMethodEnum.INNER_TEXT;
	}

	if ((useDefaultParser as ICommonBool) && !parser) {
		parserResolved = 'TestLeaf';
	}

	return {
		el: elResolved,
		method: methodResolved,
		parser: parserResolved,
	};
};
