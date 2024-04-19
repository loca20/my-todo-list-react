import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
	if (tasks.length === 0) {
		return null;
	}
	return (
		<span className="section__buttons">
			<button className="section__button">
				{hideDone ? "Pokaż" : "Ukryj"} ukończone
			</button>
			<button
				className={`section__button ${
					tasks.every(({ done }) => done) ? "section__button--disabled" : ""
				}`}>
				Ukończ wszystkie
			</button>
		</span>
	);
};

export default Buttons;
