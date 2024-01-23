// MainContent.jsx
import React from "react";

const MainContent = ({ selectedPage }) => {
	return (
		<div className="main-content">
			<h2>Main Content</h2>
			<p>{`This is the ${selectedPage} page.`}</p>
		</div>
	);
};

export default MainContent;
