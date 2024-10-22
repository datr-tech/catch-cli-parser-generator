import { generateInterfaceCodeHelper } from '@app/core/generatorHelpers/index';
import { getInterfaceParseOutputTemplateName } from '@app/core/services/templateService';
import { ICodeGeneratorHelperGenerateInterfaceConsumer } from '@app/interfaces/core/codeGeneratorHelpers';

export const generateInterfaceParseOutputCodeHelper: ICodeGeneratorHelperGenerateInterfaceConsumer =
	({ parserDef }) => {
		const name = getInterfaceParseOutputTemplateName({ parserDef });
		return generateInterfaceCodeHelper({ parserDef, name });
	};
