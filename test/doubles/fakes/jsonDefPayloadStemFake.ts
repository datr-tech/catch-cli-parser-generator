import { TemplateParserMethodEnum } from '@app/config/enums';
import {
	ICommonBool,
	ICommonJsonDefPayloadEl,
	ICommonJsonDefPayloadStem,
	ICommonJsonDefPayloadStemChildParser,
	ICommonNameStr,
} from '@app/interfaces/common';
import {
	IFakeJsonDefPayloadStem,
	IFakeJsonDefPayloadStemInput,
} from '@test/interfaces/doubles/fakes';

/**
 * @public
 *
 * Retrieve a fake jsonDefPayload stem object.
 *
 * @param {IFakeJsonDefInput)} args
 * @param {ICommonJsonDefPayloadStemChildParser} args.childParsers
 * @param {ICommonNameStr} args.method
 * @param {ICommonNameStr} args.parser
 * @param {ICommonBool} args.useDefaultChildParsers
 * @param {ICommonBool} args.useDefaultMethod
 * @param {ICommonBool} args.useDefaultParser
 * @returns {ICommonJsonDefPayloadStem}
 */
export const jsonDefPayloadStemFake: IFakeJsonDefPayloadStem = ({
	childParsers,
	el,
	method,
	parser,
	useDefaultChildParsers = true,
	useDefaultEl = true,
	useDefaultMethod = true,
	useDefaultParser = true,
}: IFakeJsonDefPayloadStemInput = {}): ICommonJsonDefPayloadStem => {
	let childParsersResolved: ICommonJsonDefPayloadStemChildParser[] | undefined = childParsers;
	let elResolved: ICommonJsonDefPayloadEl | undefined = el;
	let methodResolved: TemplateParserMethodEnum | undefined = method;
	let parserResolved: ICommonNameStr | undefined = parser;

	if ((useDefaultChildParsers as ICommonBool) && !childParsers) {
		childParsersResolved = [
			{
				ref: 'childOne',
				childParser: 'TestStemChildOne',
			},
			{
				ref: 'childTwo',
				childParser: 'TestStemChildTwo',
			},
		];
	}

	if ((useDefaultEl as ICommonBool) && !el) {
		elResolved = {
			class: 'test-stem',
			tag: 'div',
		};
	}

	if ((useDefaultMethod as ICommonBool) && !method) {
		methodResolved = TemplateParserMethodEnum.INNER_TEXT;
	}

	if ((useDefaultParser as ICommonBool) && !parser) {
		parserResolved = 'TestStem';
	}

	return {
		childParsers: childParsersResolved,
		el: elResolved,
		method: methodResolved,
		parser: parserResolved,
	};
};
