import { useState } from "react";
import comic01 from "./assets/comic01.jpg";
import comic02 from "./assets/comic02.jpg";
import comic03 from "./assets/comic03.jpg";

function App() {
	const comics = [comic01, comic02, comic03];
	const [active, setActive] = useState(0);

	function mod(n: number, m: number) {
		const result = n % m;
		return result >= 0 ? result : result + m;
	}

	return (
		<div className="App">
			<div className="carousel">
				{comics.map((comic, index) => {
					const leftIndex = mod(active - 1, comics.length);
					const rightIndex = mod(active + 1, comics.length);

					let className: string;

					if (index === active) {
						className = "card card-active";
					} else if (index === leftIndex) {
						className = "card card--inactive--left";
					} else if (index === rightIndex) {
						className = "card card--inactive--right";
					} else {
						className = "card";
					}

					return <img src={comic} key={index} className={className} />;
				})}
			</div>
		</div>
	);
}

export default App;
