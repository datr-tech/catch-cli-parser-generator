import { FileExtensionEnum, TemplateTypeEnum } from '@app/config/enums';
import { assertCondition } from '@app/assertions';
import { ICommonNameStr } from '@app/interfaces/common';
import { IHelperDeriveFileName, IHelperDeriveFileNameInput } from '@app/interfaces/helpers';

/**
 * @public
 *
 * Derive the name for a code file from the 'defModel'
 * and the template type, 'templateTypeEnum'.
 *
 * @param {IHelperDeriveFileNameInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {ICommonNameStr}
 *
 * @throws When 'defNameStr' is not truthy
 */
export const deriveFileNameCodeHelper: IHelperDeriveFileName = ({
	defModel,
	templateTypeEnum,
}: IHelperDeriveFileNameInput): ICommonNameStr => {
	let codeFileName: ICommonNameStr;
	const defNameStr = defModel.getName();

	assertCondition({
		condition: !!defNameStr,
	});

	switch (templateTypeEnum) {
		case TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER:
			codeFileName = `${defNameStr}Parser.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE:
			codeFileName = `I${defNameStr}Parse.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT:
			codeFileName = `I${defNameStr}ParseOutput.${FileExtensionEnum.TYPESCRIPT}`;
			break;
		case TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER:
			codeFileName = `I${defNameStr}Parser.${FileExtensionEnum.TYPESCRIPT}`;
			break;
	}

	return codeFileName;
};