interface ICode {
	dark: boolean;
	contractType: string;
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ContractCode } from './ContractCode';

const Code = (props: ICode) => {
    let solCode = ContractCode();
	return (
		<div className="w-full h-full bg-[#111418] rounded-xl p-4 overflow-y-scroll">
			<h1 className="font-mt text-lg text-green-400 pb-2">Auction.sol</h1>
			<div className="w-full h-[2px] bg-green-400" />
			<div className="w-full flex p-2">
                <SyntaxHighlighter language="sol" style={dracula} showLineNumbers={true} lineNumberContainerStyle={{ padding: 2 }}>
                    {solCode}
                </SyntaxHighlighter>
			</div>
		</div>
	);
};

export default Code;
