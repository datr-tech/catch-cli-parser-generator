import { generateInterface } from './generateInterface';
import { generateParser } from './generateParser';
import { IGeneratorCode } from '@app/interfaces/core/generators';

export const generateCode: IGeneratorCode = ({ parserDefs }) => {
	return parserDefs.map((parserDef) => ({
		...generateParser({ parserDef }),
		...generateInterface({ parserDef }),
	}));
};
