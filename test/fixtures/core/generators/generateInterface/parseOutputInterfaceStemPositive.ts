export const parseOutputInterfaceStemPositive = `
import { IParsernameParseOutput } from '@app/interfaces/core/parsers/IParsernameParseOutput';
import { IParsernameHrefParseOutput } from '@app/interfaces/core/parsers/IParsernameHrefParseOutput';
import { IParsertitleParseOutput } from '@app/interfaces/core/parsers/IParsertitleParseOutput';

export type IParserstemParseOutput = {
		name: IParsernameParseOutput;
		nameHref: IParsernameHrefParseOutput;
		title: IParsertitleParseOutput;
};`;
