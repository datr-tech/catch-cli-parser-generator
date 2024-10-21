import { ITransformerParserDef } from '@app/interfaces/core/transformers';
import { transformStrToUcfirst } from './transformStrToUcfirst';

export const transformParserDefPropParserUcfirst: ITransformerParserDef = ({ parserDef }) => {
	const parserDefCloned = { ...parserDef };
	const { parser } = parserDefCloned;
	parserDefCloned.parser = transformStrToUcfirst({ value: parser, name: 'parser' });

	return parserDefCloned;
};
