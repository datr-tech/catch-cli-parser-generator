import { FileExtensionEnum, TemplateTypeEnum } from '@app/config/enums';
import { assertCondition } from '@app/assertions';
import { ICommonNameStr } from '@app/interfaces/common';
import { IHelperDeriveFileNameBase, IHelperDeriveFileNameBaseInput } from '@app/interfaces/helpers';

/**
 * @public
 *
 * Derive the name for a code file from the received 'defNameStr'
 * and the template type, 'templateTypeEnum'.
 *
 * @param {IHelperDeriveFileNameBaseInput} args
 * @param {ICommonNameStr} args.defNameStr
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {ICommonNameStr}
 *
 * @throws When 'defNameStr' is not truthy
 */
export const deriveFileNameCodeHelperBase: IHelperDeriveFileNameBase = ({
	defNameStr,
	templateTypeEnum,
}: IHelperDeriveFileNameBaseInput): ICommonNameStr => {
	let codeFileName: ICommonNameStr;

	assertCondition({
		condition: !!defNameStr,
		errorMessage: "Invalid 'defNameStr'",
	});

	switch (templateTypeEnum) {
		case TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER:
			codeFileName = `${defNameStr}Parser.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE:
			codeFileName = `IParse${defNameStr}.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT:
			codeFileName = `IParse${defNameStr}Output.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
			codeFileName = `IParser${defNameStr}.${FileExtensionEnum.TYPESCRIPT}`;
			break;
	}

	return codeFileName;
};
