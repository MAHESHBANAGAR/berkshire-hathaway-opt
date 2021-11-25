import React from 'react';
import './headerStyles.css';

const header = () => {
	return (
		<div>
			<div className="container">
				<nav>
					<h1 className="brand"><a href="nav.html">BERKSHIRE HATHAWAY</a></h1>
					<ul>
						<li><a href="#">News</a></li>
						<li><a href="#">Reports</a></li>
						<li><a href="#">Letters</a></li>
						<li><a href="#">Subsidiaries</a></li>
						<li><a href="#">About</a></li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default header;
