import { codeTemplateModelsBuilder } from '@app/builders';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { IFixtureCodeModel, IFixtureCodeModelParams } from '@test/interfaces/fixtures/models';
import { codeModelFixtureParams } from './codeModelFixtureParams';

export const codeModelFixture: IFixtureCodeModel[] = codeModelFixtureParams.map(
	({
		description,
		defTypeEnum,
		jsonPayload,
		jsonDefName,
		outDirTypeEnum,
		templateTypeEnum,
		writtenCodeExpected,
	}: IFixtureCodeModelParams): IFixtureCodeModel => {
		const { codeModel, codeFilePathService } = codeTemplateModelsBuilder.build({
			defTypeEnum,
			jsonDefName,
			jsonPayload,
			outDirPath: CONSTS_PATHS_APP_ROOT,
			outDirTypeEnum,
			templateTypeEnum,
		});

		return {
			description,
			type: defTypeEnum,
			codeModel,
			codeFilePathService,
			writtenCodeExpected,
		};
	},
);
