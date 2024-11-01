import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper, deriveFileNameTemplateHelper } from '@app/helpers';
import { jsonDefFake } from '@test/doubles/fakes';
import { IFixtureFileNameServiceGetFileNamePositive } from '../../../interfaces/fixtures/services/fileServices';

export const fileNameServiceGetFileNameFixturePositive: IFixtureFileNameServiceGetFileNamePositive[] =
	[
		{
			fileNameStrExpected: 'TestParser.ts',
			getFileNameHelper: deriveFileNameCodeHelper,
			jsonDef: jsonDefFake({ name: 'Test' }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			fileNameStrExpected: 'IParseTest.ts',
			getFileNameHelper: deriveFileNameCodeHelper,
			jsonDef: jsonDefFake({ name: 'Test' }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			fileNameStrExpected: 'IParseTestOutput.ts',
			getFileNameHelper: deriveFileNameCodeHelper,
			jsonDef: jsonDefFake({ name: 'Test' }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			fileNameStrExpected: 'IParserTest.ts',
			getFileNameHelper: deriveFileNameCodeHelper,
			jsonDef: jsonDefFake({ name: 'Test' }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			fileNameStrExpected: 'parsers/parser.iter.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_ITER }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			fileNameStrExpected: 'parsers/parser.leaf.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_LEAF }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			fileNameStrExpected: 'parsers/parser.stem.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_STEM }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_ITER }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_LEAF }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_STEM }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.output.iter.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_ITER }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.output.leaf.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_LEAF }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parse.output.stem.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_STEM }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSE_OUTPUT,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parser.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_ITER }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parser.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_LEAF }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
		{
			fileNameStrExpected: 'interfaces/interface.parser.hbs',
			getFileNameHelper: deriveFileNameTemplateHelper,
			jsonDef: jsonDefFake({ name: 'Test', type: DefTypeEnum.DEF_TYPE_STEM }),
			templateTypeEnum: TemplateTypeEnum.TEMPLATE_TYPE_INTERFACE_PARSER,
		},
	];
