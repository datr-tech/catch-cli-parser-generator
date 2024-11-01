import { DefTypeEnum, TemplateParserMethodEnum } from '@app/config/enums';
import {
	ICommonBool,
	ICommonJsonDef,
	ICommonJsonDefPayload,
	ICommonNameStr,
	ICommonStr,
} from '@app/interfaces/common';
import { IFakeJsonDef, IFakeJsonDefInput } from '@test/interfaces/doubles/fakes';

/**
 * @public
 *
 * Derive a fake jsonDef object.
 *
 * @param {IFakeJsonDefInput)} args
 * @param {ICommonStr} args.description
 * @param {ICommonNameStr} args.name
 * @param {ICommonJsonDefPayload} args.payload
 * @param {DefTypeEnum} args.type
 * @param {ICommonBool} args.useDefaultDescription
 * @param {ICommonBool} args.useDefaultName
 * @param {ICommonBool} args.useDefaultPayload
 * @param {ICommonBool} args.useDefaultType
 * @returns {ICommonJsonDef}
 */
export const jsonDefFake: IFakeJsonDef = ({
	description,
	name,
	payload,
	type,
	useDefaultDescription = true,
	useDefaultName = true,
	useDefaultPayload = true,
	useDefaultType = true,
}: IFakeJsonDefInput = {}): ICommonJsonDef => {
	let descriptionResolved: ICommonStr | undefined = description;
	let nameResolved: ICommonNameStr | undefined = name;
	let payloadResolved: ICommonJsonDefPayload | undefined = payload;
	let typeResolved: DefTypeEnum | undefined = type;

	if ((useDefaultDescription as ICommonBool) && !description) {
		descriptionResolved = 'JSON_DEF_FAKE_DESCRIPTION';
	}

	if ((useDefaultName as ICommonBool) && !name) {
		nameResolved = 'JSON_DEF_FAKE';
	}

	if ((useDefaultPayload as ICommonBool) && !payload) {
		payloadResolved = {
			method: TemplateParserMethodEnum.GET_ATTRIBUTE_SRC,
			parser: 'Test',
		};
	}

	if ((useDefaultType as ICommonBool) && !type) {
		typeResolved = DefTypeEnum.DEF_TYPE_LEAF;
	}

	return {
		description: descriptionResolved,
		name: nameResolved,
		payload: payloadResolved,
		type: typeResolved,
	};
};
