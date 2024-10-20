import { generateParserCodeHelper } from '@app/core/codeGeneratorHelpers';
import { IGeneratorParser } from '@app/interfaces/core/generators';

export const parserGenerator: IGeneratorParser = ({ parserDef }) => {
	const parserCode = generateParserCodeHelper({ parserDef });

	return {
		parserDef,
		parserCode,
	};
};
