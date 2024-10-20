import {
	getTemplateHelperInterfaceParse,
	getTemplateHelperInterfaceParseOutput,
	getTemplateHelperInterfaceParser,
} from '@app/core/helpers';

export const interfaceGenerator = ({ parserDef }) => {
	const parseOutputInterface = getTemplateHelperInterfaceParseOutput({ parserDef });
	const parseInterface = getTemplateHelperInterfaceParse({ parserDef });
	const parserInterface = getTemplateHelperInterfaceParser({ parserDef });

	return {
		parserDef,
		parseOutputInterface,
		parseInterface,
		parserInterface,
	};
};
