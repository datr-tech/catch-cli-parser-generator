import { generateInterfaceCodeHelper } from '@app/core/codeGeneratorHelpers/index';
import { getInterfaceParseOutputTemplateName } from '@app/core/services/templateService';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParseOutputCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer =
	({ parserDef }) => {
		const templateName = getInterfaceParseOutputTemplateName({ parserDef });

		return generateInterfaceCodeHelper({ parserDef, templateName });
	};
