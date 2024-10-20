import { interfaceGenerator } from './interfaceGenerator';
import { parserGenerator } from './parserGenerator';
import { IGeneratorParsers } from '@app/interfaces/core/generators';

export const parsersGenerator: IGeneratorParsers = ({ parserDefs }) =>
	parserDefs.map((parserDef) => ({
		...parserGenerator({ parserDef }),
		...interfaceGenerator({ parserDef }),
	}));
