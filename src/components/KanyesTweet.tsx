import React, { useState } from "react";

interface Props {
	rank: number;
	quote: string;
	votes: number;
}

const KanyesTweet = (props: Props) => {
	const [state, setstate] = useState<number>(props.votes);

	return (
		<div className="kanyevote">
			<h3>{props.rank + 1}#</h3>
			<p className="kanyequote">{props.quote}</p>
			<button onClick={() => setstate(state + 1)}>Vote!</button>
			<h3>{state}</h3>
		</div>
	);
};

export { KanyesTweet };
