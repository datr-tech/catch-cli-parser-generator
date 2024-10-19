import Handlebars from 'handlebars';
import fs from 'node:fs';
import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { FileExtensionEnum } from '@app/config/enums';
import { IParserGenerator } from '@app/interfaces/core/generators/parserGenerator';
import {
	assertParserDefLeaf,
	assertParserDefStem,
} from '@app/core/assertions/parserDefs';

export const parserGenerator: IParserGenerator = ({ parserDef }) => {
	let templateName: string;

	assertParserDefLeaf({ parserDef });
	assertParserDefStem({ parserDef });

	switch (parserDef.type) {
		case ParserTypeEnum.ITER:
			templateName = `parserIter.${FileExtensionEnum.HBS}`;
			break;
		case ParserTypeEnum.LEAF:
			templateName = `parserLeaf.${FileExtensionEnum.HBS}`;
			break;
		case ParserTypeEnum.STEM:
			templateName = `parserStem.${FileExtensionEnum.HBS}`;
			break;
	}

	const path = `${CONSTS_PATHS_TEMPLATES_DIR}/parsers/${templateName}`;
	const template: string = fs.readFileSync(path, 'utf-8');
	const templateFn = Handlebars.compile(template);
	const parserCode = templateFn(parserDef);

	return {
		parserDef,
		parserCode,
	};
};
