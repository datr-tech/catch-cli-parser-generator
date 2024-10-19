import Handlebars from 'handlebars';
import fs from 'node:fs';
import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { IParserGenerator } from '@app/interfaces/core/generators/parserGenerator';

export const parserGenerator: IParserGenerator = ({ parserDef }) => {
	let templateName: string;

	switch (parserDef.type) {
		case ParserTypeEnum.ITER:
			templateName = 'parserIter.hbs';
			break;
		case ParserTypeEnum.LEAF:
			templateName = 'parserLeaf.hbs';
			break;
		case ParserTypeEnum.STEM:
			templateName = 'parserStem.hbs';
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
