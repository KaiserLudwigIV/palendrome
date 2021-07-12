import React, { useState, useEffect } from "react";
import { KanyesTweet } from "./components/KanyesTweet";

interface Props {}

interface KanyeWVotes {
	quote: string;
	votes: number;
	rank: number;
}

const Kanye = (props: Props) => {
	const [allKanye, setallKanye] = useState<KanyeWVotes[]>([]);
	const [filter, setfilter] = useState<string>("");

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
		)
			.then((e) => e.json())
			.then((e) => {
				const truekanye = e
					.map((e: string) => ({
						quote: e,
						votes: Math.round(Math.random() * 1000),
					}))
					.sort(function (a: KanyeWVotes, b: KanyeWVotes) {
						return b.votes - a.votes;
					})
					.map((e: KanyeWVotes, ind: number) => ({
						quote: e.quote,
						votes: e.votes,
						rank: ind,
					}));
				setallKanye(truekanye);
			});
	}, []);

	const lcFilter = filter.toLowerCase().trim();
	const kanyes = allKanye.filter(({ quote }) =>
		quote
			.toLowerCase()
			.replace(/[^a-z]/, "")
			.includes(lcFilter)
	);

	return (
		<div
			className="container"
			style={{
				marginTop: "7rem",
				paddingBottom: "3rem",
				alignItems: "flex-start",
				width: "auto",
			}}
		>
			<h1>Search for a tweet!</h1>
			<input
				className="palInput"
				type="text"
				value={filter}
				onChange={(e) => setfilter(e.target.value)}
			/>
			{kanyes.map((e, ind) => (
				<KanyesTweet
					rank={e.rank}
					key={ind.toString()}
					quote={e.quote}
					votes={e.votes}
					kanyeHook={setallKanye}
					allKanye={allKanye}
				/>
			))}
		</div>
	);
};

export { Kanye };
