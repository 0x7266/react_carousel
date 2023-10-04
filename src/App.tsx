import comic01 from "./assets/comic01.jpg";
import comic02 from "./assets/comic02.jpg";
import comic03 from "./assets/comic03.jpg";

function App() {
	const comics = [comic01, comic02, comic03];
	return (
		<div className="App">
			<div className="carousel">
				{comics.map((comic, index) => (
					<img src={comic} key={index} className="card" />
				))}
			</div>
		</div>
	);
}

export default App;
