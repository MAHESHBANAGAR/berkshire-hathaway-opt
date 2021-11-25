import React from 'react';
import './footerStyles.css';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col">
							<h4>Jeff Shibasaki</h4>
							<ul>
								<li><a href="#">About</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Resume</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Portfolio</h4>
							<ul>
								<li><a href="#">Work</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">Challenges</a></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Social</h4>
							<ul>
								<div className="social-links">
									<a href="#"><i className="fab fa-facebook-f"></i></a>
									<a href="#"><i className="fab fa-twitter"></i></a>
									<a href="#"><i className="fab fa-instagram"></i></a>
									<a href="#"><i className="fab fa-linkedin-in"></i></a>
								</div>
							</ul>
						</div>
						<div className="footer-col">
							<div className="tandc">
								<span>Terms</span>&nbsp;
								<span>Privacy</span>&nbsp;
								<span>Disclaimer</span>&nbsp;
								<span>Asscessibility</span>&nbsp;
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer;
