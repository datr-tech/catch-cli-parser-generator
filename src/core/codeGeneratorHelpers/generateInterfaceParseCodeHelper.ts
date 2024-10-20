import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/codeGeneratorHelpers/index';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParseCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer = ({
	parserDef,
}) => {
	const templateName = `${TemplateNamePrefixEnum.INTERFACE_PARSE}.${FileExtensionEnum.HBS}`;

	return generateInterfaceCodeHelper({ parserDef, templateName });
};
