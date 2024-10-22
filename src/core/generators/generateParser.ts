import { generateParserCodeHelper } from '@app/core/generatorHelpers';
import { IGeneratorParser } from '@app/interfaces/core/generators';

export const generateParser: IGeneratorParser = ({ parserDef }) => {
	const parserCode = generateParserCodeHelper({ parserDef });

	return {
		parserDef,
		parserCode,
	};
};
