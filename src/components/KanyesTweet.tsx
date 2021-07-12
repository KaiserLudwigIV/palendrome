import React, { useState, useEffect } from "react";

interface KanyeWVotes {
	quote: string;
	votes: number;
	rank: number;
}

interface Props {
	rank: number;
	quote: string;
	votes: number;
	kanyeHook: React.Dispatch<React.SetStateAction<KanyeWVotes[]>>;
	allKanye: KanyeWVotes[];
}

const KanyesTweet = (props: Props) => {
	const [state, setstate] = useState<number>(props.votes);
	useEffect(() => {
		setstate(props.votes);
	});
	return (
		<div className="kanyevote">
			<h3>{props.rank + 1}#</h3>
			<p className="kanyequote">{props.quote}</p>
			<div>
				<button
					onClick={() => {
						const cpyArr = [...props.allKanye];
						cpyArr[props.rank].votes += 1;
						const finalArr = cpyArr
							.sort(function (a: KanyeWVotes, b: KanyeWVotes) {
								return b.votes - a.votes;
							})
							.map((e: KanyeWVotes, ind: number) => ({
								quote: e.quote,
								votes: e.votes,
								rank: ind,
							}));
						props.kanyeHook(finalArr);
					}}
				>
					Vote!
				</button>
				<h3>{props.votes}</h3>
			</div>
		</div>
	);
};

export { KanyesTweet };
