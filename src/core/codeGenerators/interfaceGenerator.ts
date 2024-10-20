import {
	generateInterfaceParseCodeHelper,
	generateInterfaceParseOutputCodeHelper,
	generateInterfaceParserCodeHelper,
} from '@app/core/codeGeneratorHelpers';
import { IGeneratorInterface } from '@app/interfaces/core/generators';

export const interfaceGenerator: IGeneratorInterface = ({ parserDef }) => {
	const parseOutputInterface = generateInterfaceParseOutputCodeHelper({ parserDef });
	const parseInterface = generateInterfaceParseCodeHelper({ parserDef });
	const parserInterface = generateInterfaceParserCodeHelper({ parserDef });

	return {
		parserDef,
		parseOutputInterface,
		parseInterface,
		parserInterface,
	};
};
