import {
	getTemplateHelperInterfaceParse,
	getTemplateHelperInterfaceParseOutput,
	getTemplateHelperInterfaceParser,
} from '@app/core/helpers';
import { IGeneratorInterface } from '@app/interfaces/core/generators/interfaceGenerator';

export const interfaceGenerator: IGeneratorInterface = ({ parserDef }) => {
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
