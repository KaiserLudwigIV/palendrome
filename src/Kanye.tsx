import React, { useState, useEffect } from "react";
import { KanyesTweet } from "./components/KanyesTweet";

interface Props {}

const Kanye = (props: Props) => {
	const [kanye, setkanye] = useState<string[]>([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
		)
			.then((e) => e.json())
			.then((e) => setkanye(e));
	}, []);

	return (
		<div
			className="container"
			style={{ marginTop: "7rem", paddingBottom: "3rem" }}
		>
			{kanye.map((e, ind) => (
				<KanyesTweet
					rank={ind}
					key={ind.toString()}
					quote={e}
					votes={Math.round(Math.random() * 1000)}
				/>
			))}
		</div>
	);
};

export { Kanye };
