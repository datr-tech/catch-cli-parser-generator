import { interfaceGenerator } from './interfaceGenerator';
import { parserGenerator } from './parserGenerator';
import { IGeneratorParsers } from '@app/interfaces/core/generators';

export const parsersGenerator: IGeneratorParsers = ({ parserDefs }) => {
	return parserDefs.map((parserDef) => ({
		...parserGenerator({ parserDef }),
		...interfaceGenerator({ parserDef }),
	}));
};
