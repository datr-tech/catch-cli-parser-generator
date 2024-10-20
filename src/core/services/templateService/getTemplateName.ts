import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { FileExtensionEnum } from '@app/config/enums';
import { assertParserDefLeaf, assertParserDefStem } from '@app/core/assertions';
import { ITemplateServiceGetTemplateName } from '@app/interfaces/core/services/templateService';

export const getTemplateName: ITemplateServiceGetTemplateName = ({
	parserDef,
	templateNamePrefix,
}) => {
	let templateName: string;

	assertParserDefLeaf({ parserDef });
	assertParserDefStem({ parserDef });

	switch (parserDef.type) {
		case ParserTypeEnum.ITER:
			templateName = `${templateNamePrefix}Iter.${FileExtensionEnum.HBS}`;
			break;
		case ParserTypeEnum.LEAF:
			templateName = `${templateNamePrefix}Leaf.${FileExtensionEnum.HBS}`;
			break;
		case ParserTypeEnum.STEM:
			templateName = `${templateNamePrefix}Stem.${FileExtensionEnum.HBS}`;
			break;
	}

	return templateName;
};
