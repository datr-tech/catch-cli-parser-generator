import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/generatorHelpers/index';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParseCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer = ({
	parserDef,
}) => {
	const name = `${TemplateNamePrefixEnum.INTERFACE_PARSE}.${FileExtensionEnum.HBS}`;
	return generateInterfaceCodeHelper({ parserDef, name });
};
