import React from 'react';
// import logo from './images/logo.svg';
import './App.css';

function App() {
	return (
		<div id="page-wrapper">
			<header id="header" className="alt">
				<h1><a href="https://github.com/JoshuaBelden/pandemic-memorial">Contribute on GitHub</a></h1>
				<nav id="nav">
					<ul>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</nav>
			</header>
			<section id="banner">
				<h2>Pandemic Memorial</h2>
				<p>Dedicated to honoring those whose lives were lost in the fight against COVID-19.</p>
			</section>
			<section id="main" className="container">
				<section className="box special">
					<header className="major">
						<h2>Latest in the tragic loss of life across the globe</h2>
						<div>
							<p>
								<b>Total Cases</b>: 1,015,403
							</p>
							<p>
								<b>Deaths</b>: 53,030
							</p>
						</div>
						<div>
							<sub>updated Wednesday April 2nd, 2020</sub>
						</div>
					</header>
					<span className="image featured"><img src="images/feature.jpg" alt="" /></span>
				</section>
				<section className="box special features">
					<div className="features-row">
						<section>
							<span>
								<img src="images/article/article-3.jpg" width="250" alt="article-3"/>
							</span>
							<h3>Suzanne Hoylaerts</h3>
							<p>
								In a bittersweet tale which has moved the world to tears, a 90 year old Belgian woman refused to be connected to a ventilator to aid her failing respiratory system, because she felt younger people had better need of it.
								<br />
								Suzanne Hoylaerts from Lubbeek, Belgium told the medical team that she had lived a good life and she wasn’t worried about dying at all.
								<br />
								She told them it was better to use the breathing apparatus on younger people who needed it more than her.
								<br />
								Her request implied that younger people than her, still had much to live for.
							</p>
							<sub>March 30th, 2020</sub>
							<p>
								<b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://iharare.com/90-yr-old-woman-dies-from-coronavirus-after-refusing-ventilator-tells-doctor-to-save-it-for-sick-younger-people/">iharare.com</a>
							</p>
						</section>
						<section>
							<span>
								<img src="images/article/article-4.jpg" width="250" alt="article-4"/>
							</span>
							<h3>Kious Kelly</h3>
							<p>
								Kious Kelly, a nurse manager at a Manhattan hospital, texted his sister on March 18 with some devastating news: He had tested positive for the coronavirus and was on a ventilator in the intensive care unit. He told her he could text but not talk.
								<br />
								“I’m okay. Don’t tell Mom and Dad. They’ll worry,” he wrote to his sister, Marya Patrice Sherron.
								<br />
								That was his last message. Ms. Sherron’s subsequent texts to him went unanswered. In less than a week, he was dead.
							</p>
							<sub>March 26th, 2020</sub>
							<p>
								<b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://www.nytimes.com/2020/03/26/nyregion/nurse-dies-coronavirus-mount-sinai.html?action=click&module=Top%20Stories&pgtype=Homepage">The New York Times</a>
							</p>
						</section>
					</div>
					<div className="features-row">
						<section>
							<span>
								<img src="images/article/article-2.jpeg" width="250" alt="article-2"/>
							</span>
							<h3>James Villecco, 55</h3>
							<p>
								An ambulance mechanic and U.S. Army veteran on Sunday became the first FDNY member to die of coronavirus.
								<br/>
								James Villecco, 55, a Staten Island resident, was hailed as an “unsung hero."
								<br/>
								“This is the kind of unsung hero who doesn’t get the credit he deserves,” Mayor de Blasio told reporters. "This is the kind of man who keeps us safe because he kept the ambulances in good repair so they could get there to help all of us.”
								<br/>
								Villecco joined FDNY fleet services in 2014, and worked at the FDNY’s Coney Island repair facility and later, the department’s ambulance repair shop on Review Ave. in Long Island City.
								<br/>
								“James Villecco was one of those truly unsung heroes in our Department whose outstanding work provided medical care for the people of our city," FDNY Commissioner Daniel Nigro said. "The entire Department mourns his loss.”
								<br/>
								Villecco is survived by his wife, Joy, and daughter, Jessica.
							</p>
							<sub>March 29th, 2020</sub>
							<p>
								<b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://www.nydailynews.com/coronavirus/ny-coronavirus-fdny-ambulance-mechanic-dies-20200329-tjfnlsfapvggballrtuo2whfde-story.html">NY Daily News</a>
							</p>
						</section>
						<section>
							<span>
								<img src="images/article/article-1.jpeg" width="250" alt="article-1"/>
							</span>
							<h3>Isaura Castermans</h3>
							<p>
								A 30-year-old nurse from Belgium died in hospital on Thursday after becoming infected with the coronavirus. The disease spread to her heart and was fatal. She was athletic, did crossfit. We can't understand it, "says her parents. Isaura Castermans is said to be the youngest victim in Belgium to succumb to the virus.
							</p>
							<sub>March 28th, 2020</sub>
							<p>
								<b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://www.ad.nl/buitenland/belgische-verpleegster-30-overlijdt-nadat-coronavirus-toeslaat-op-hart-isaura-was-kerngezond~acc0fd05/">ad.nl</a>
							</p>
						</section>
					</div>
				</section>
			</section>

			<section id="dev-notes" className="box">
				<p>
					This site is an open source project that is just getting started. Expect delays as we organize and get ourselves together. Updates are slow right now, but should be gaining momentum in the near future.
				</p>
			</section>

			<section id="cta">

				<h2>Subscribe for alerts and updates.</h2>
				<p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc.</p>

				<form>
					<div className="row gtr-50 gtr-uniform">
						<div className="col-8 col-12-mobilep">
							<input type="email" name="email" id="email" placeholder="Email Address" />
						</div>
						<div className="col-4 col-12-mobilep">
							<input type="submit" value="Sign Up" className="fit" />
						</div>
					</div>
				</form>

			</section>
			<footer id="footer">
				<ul className="icons">
					<li>
						<a href="https://github.com/JoshuaBelden/pandemic-memorial" className="icon brands fa-github"><span className="label">Github</span></a>
					</li>
				</ul>
				<ul className="copyright">
					<li>&copy;pandemicmemorial.com All rights reserved.</li>
					<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
