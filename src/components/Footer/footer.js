import React from 'react';
import './footerStyles.css';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>BERKSHIRE HATHAWAY</h4>
							<ul>
								<li><a href="#">About</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Reports</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Pledges</a></li>
								<li><a href="#">Apparel</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>LETTERS</h4>
							<ul>
								<li><a href="#">Owner's Manual</a></li>
								<li><a href="#">Warren's Letters</a></li>
								<li><a href="#">Charlie's Letters</a></li>
								<li><a href="#">Special Letters</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>COMPANIES</h4>
							<ul>
								<li><a href="#">Subsidiaries</a></li>
								<li><a href="#">Minority Holdings</a></li>
								<li><a href="#">Corporate Governance</a></li>
								<li><a href="#">Sustainability</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>INVESTING</h4>
							<ul>
								<li><a href="#">Class A and B Stock</a></li>
								<li><a href="#">SEC Filings</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<ul>
								<li>
									<span>Terms</span>&nbsp;&nbsp;&nbsp;
									<span>Privacy</span>&nbsp;&nbsp;&nbsp;
									<span>Disclaimer</span>
								</li>
								<li>Copyright &copy; 1978-2020</li>
								<li>Berkshire Hathaway Inc.</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer;
