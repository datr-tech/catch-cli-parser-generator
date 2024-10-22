import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/generatorHelpers/index';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParserCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer = ({
	parserDef,
}) => {
	const name = `${TemplateNamePrefixEnum.INTERFACE_PARSER}.${FileExtensionEnum.HBS}`;
	return generateInterfaceCodeHelper({ parserDef, name });
};
