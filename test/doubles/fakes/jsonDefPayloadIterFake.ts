import {
	ICommonBool,
	ICommonJsonDefPayloadIter,
	ICommonNameStr,
	ICommonStr,
} from '@app/interfaces/common';
import {
	IFakeJsonDefPayloadIter,
	IFakeJsonDefPayloadIterInput,
} from '@test/interfaces/doubles/fakes';

/**
 * @public
 *
 * Derive a fake jsonDefPayload iter object.
 *
 * @param {IFakeJsonDefInput)} args
 * @param {ICommonStr} args.childParser
 * @param {ICommonNameStr} args.parser
 * @param {ICommonBool} args.useDefaultChildParser
 * @param {ICommonBool} args.useDefaultParser
 * @returns {ICommonJsonDefPayloadIter}
 */
export const jsonDefPayloadIterFake: IFakeJsonDefPayloadIter = ({
	childParser,
	parser,
	useDefaultChildParser = true,
	useDefaultParser = true,
}: IFakeJsonDefPayloadIterInput = {}): ICommonJsonDefPayloadIter => {
	let childParserResolved: ICommonStr | undefined = childParser;
	let parserResolved: ICommonNameStr | undefined = parser;

	if ((useDefaultChildParser as ICommonBool) && !childParser) {
		childParserResolved = 'TestIterChild';
	}

	if ((useDefaultParser as ICommonBool) && !parser) {
		parserResolved = 'TestIter';
	}

	return {
		childParser: childParserResolved,
		parser: parserResolved,
	};
};
