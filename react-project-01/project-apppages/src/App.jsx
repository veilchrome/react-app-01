// App.jsx
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

const App = () => {
	const [selectedPage, setSelectedPage] = useState("Home");

	const handlePageChange = (page) => {
		setSelectedPage(page);
	};

	return (
		<div className="app-container">
			<Sidebar selectedPage={selectedPage} onPageChange={handlePageChange} />
			<MainContent selectedPage={selectedPage} />
		</div>
	);
};

export default App;
