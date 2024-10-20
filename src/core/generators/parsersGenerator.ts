import { IGeneratorParsers } from '@app/interfaces/core/generators/parsersGenerator';
import { interfaceGenerator } from './interfaceGenerator';
import { parserGenerator } from './parserGenerator';

export const parsersGenerator: IGeneratorParsers = ({ parserDefs }) =>
	parserDefs.map((parserDef) => ({
		...parserGenerator({ parserDef }),
		...interfaceGenerator({ parserDef }),
	}));
