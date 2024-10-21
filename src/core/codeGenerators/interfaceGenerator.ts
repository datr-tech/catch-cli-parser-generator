import {
	generateInterfaceParseCodeHelper,
	generateInterfaceParseOutputCodeHelper,
	generateInterfaceParserCodeHelper,
} from '@app/core/codeGeneratorHelpers';
import {
	transformParserDefPropChildParserUcfirst,
	transformParserDefPropParserUcfirst,
} from '@app/core/transformers';
import { IGeneratorInterface } from '@app/interfaces/core/generators';

export const interfaceGenerator: IGeneratorInterface = ({ parserDef }) => {
	const parserDefPropsParserUcfirst = transformParserDefPropParserUcfirst({ parserDef });
	const parserDefUcfirst = transformParserDefPropChildParserUcfirst({
		parserDef: parserDefPropsParserUcfirst,
	});

	const parseOutputInterface = generateInterfaceParseOutputCodeHelper({
		parserDef: parserDefUcfirst,
	});
	const parseInterface = generateInterfaceParseCodeHelper({ parserDef: parserDefUcfirst });
	const parserInterface = generateInterfaceParserCodeHelper({ parserDef: parserDefUcfirst });

	return {
		parserDef,
		parseOutputInterface,
		parseInterface,
		parserInterface,
	};
};
