import React, { Fragment } from 'react';

import Navbar from './Navbar';
import { Footer } from './Footer';
import { Subscribe } from './Subscribe';

export const Dashboard = () => {
    return (
        <Fragment>
            <header id="header" className="alt">
                <a id="contribution" href="https://github.com/JoshuaBelden/pandemic-memorial">Contribute on GitHub</a>
                <Navbar />
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
                                <b>Total Cases</b>: 1,579,690
							</p>&nbsp;
                            <p>
                                <b>Deaths</b>: 94,567
							</p>
                        </div>
                        <div>
                            <sub>updated Wednesday April 9th, 2020</sub>
                        </div>
                    </header>
                    <span className="image featured"><img src="images/feature.jpg" alt="" /></span>
                </section>
                <section className="box special features">
                    <div className="features-row">
                        <section>
                            <span>
                                <img src="images/article/article-5.jpg" width="250" alt="article-7" />
                            </span>
                            <h3>Abdul Mabud Chowdhury, 53</h3>
                            <p>
                                Abdul Mabud Chowdhury, 53, passed away after 15 days in Queens Hospital, Romford, east London. He is one of 17 NHS medics to have lost their lives since the Covid-19 pandemic began.
                                <br />
                                Last month he wrote to Boris Johnson calling on him to ‘urgently’ make sure ‘each and every NHS worker in the UK’ had access to personal protective equipment. He said staff ‘are in direct contact’ with coronavirus patients and have a ‘human right like others to live in this world disease-free with our family and children’.
							</p>
                            <sub>April 9th, 2020</sub>
                            <p>
                                <b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://metro.co.uk/2020/04/09/doctor-warned-boris-johnson-urgent-need-ppe-dies-coronavirus-12533997/">Metro.co.uk</a>
                            </p>
                        </section>
                    </div>
                    <div className="features-row">
                        <section>
                            <span>
                                <img src="images/article/article-5.jpg" width="250" alt="article-5" />
                            </span>
                            <h3>Jean-Jacques Razafindranazy, 68</h3>
                            <p>
                                The Covid-19 outbreak has claimed its first fatality in the French medical profession, a 68-year-old A&E doctor who was retired but kept coming into work in order to help his colleagues.
                                <br />
                                Jean-Jacques Razafindranazy, who worked on an emergency ward in Compiègne, in the Oise département, where France’s first coronavirus cluster was recorded this month, died on Saturday at Lille university hospital.
							</p>
                            <sub>March 23rd, 2020</sub>
                            <p>
                                <b>source</b>: <a target="_blank" rel="noopener noreferrer" href="http://www.leparisien.fr/oise-60/coronavirus-un-urgentiste-de-compiegne-decede-apres-avoir-ete-infecte-22-03-2020-8285370.php">Le Parisien</a>
                            </p>
                        </section>
                        <section>
                            <span>
                                <img src="images/article/article-6.jpg" width="250" alt="article-6" />
                            </span>
                            <h3>Dr. Frank Gabrin, 60</h3>
                            <p>
                                Dr. Frank Gabrin, 60, an ER doctor at New Jersey’s East Orange General Hospital, had not been at work since March 26 after becoming ill, NBC reported.
                                <br />
                                The chairman of the emergency department where Gabrin worked, Dr. Alvaro Alban, described the physician as “delightful, caring and wonderful to work with.”
                                <br />
                                “He had every intention to help. He was eager to keep working in the (Emergency Department) and was disappointed when he started to get symptoms. His intention was that his fever would break,” Alban told NBC.
							</p>
                            <sub>March 26th, 2020</sub>
                            <p>
                                <b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://www.nydailynews.com/coronavirus/ny-coronavirus-dr-frank-gabrin-er-doctor-dies-20200401-qzzgepnx5vbhlji2cqxnvgfzre-story.html">NY Daily News</a>
                            </p>
                        </section>
                    </div>
                    <div className="features-row">
                        <section>
                            <span>
                                <img src="images/article/article-3.jpg" width="250" alt="article-3" />
                            </span>
                            <h3>Suzanne Hoylaerts, 90</h3>
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
                                <img src="images/article/article-4.jpg" width="250" alt="article-4" />
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
                                <img src="images/article/article-2.jpeg" width="250" alt="article-2" />
                            </span>
                            <h3>James Villecco, 55</h3>
                            <p>
                                An ambulance mechanic and U.S. Army veteran on Sunday became the first FDNY member to die of coronavirus.
								<br />
								James Villecco, 55, a Staten Island resident, was hailed as an “unsung hero."
								<br />
								“This is the kind of unsung hero who doesn’t get the credit he deserves,” Mayor de Blasio told reporters. "This is the kind of man who keeps us safe because he kept the ambulances in good repair so they could get there to help all of us.”
								<br />
								Villecco joined FDNY fleet services in 2014, and worked at the FDNY’s Coney Island repair facility and later, the department’s ambulance repair shop on Review Ave. in Long Island City.
								<br />
								“James Villecco was one of those truly unsung heroes in our Department whose outstanding work provided medical care for the people of our city," FDNY Commissioner Daniel Nigro said. "The entire Department mourns his loss.”
								<br />
								Villecco is survived by his wife, Joy, and daughter, Jessica.
							</p>
                            <sub>March 29th, 2020</sub>
                            <p>
                                <b>source</b>: <a target="_blank" rel="noopener noreferrer" href="https://www.nydailynews.com/coronavirus/ny-coronavirus-fdny-ambulance-mechanic-dies-20200329-tjfnlsfapvggballrtuo2whfde-story.html">NY Daily News</a>
                            </p>
                        </section>
                        <section>
                            <span>
                                <img src="images/article/article-1.jpeg" width="250" alt="article-1" />
                            </span>
                            <h3>Isaura Castermans, 30</h3>
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

            <Subscribe />

            <Footer />

        </Fragment>
    );
};
