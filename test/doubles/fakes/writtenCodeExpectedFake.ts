import { ICommonCodeStr } from '@app/interfaces/common';
import { writtenCodeParserFake } from './writtenCodeParserFake';
import { writtenInterfaceParseFake } from './writtenInterfaceParseFake';
import { writtenInterfaceParseOutputFake } from './writtenInterfaceParseOutputFake';
import { writtenInterfaceParserFake } from './writtenInterfaceParserFake';

export const writtenCodeExpectedFake: ICommonCodeStr[] = writtenCodeParserFake
	.concat(writtenInterfaceParseFake)
	.concat(writtenInterfaceParseOutputFake)
	.concat(writtenInterfaceParserFake);
