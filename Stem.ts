import { parserBuilderStem, IParseHandler } from '@datr.tech/catch-lib-parser-core';

const elName = 'span.stem';

const parseHandler: IParseHandler = async ({ el }) => ({
	name: await nameParser.parse({ elParent: el }),
	nameHref: await nameHrefParser.parse({ elParent: el }),
	title: await titleParser.parse({ elParent: el }),
});

export const stemParser = parserBuilderStem({ elName, parseHandler });
