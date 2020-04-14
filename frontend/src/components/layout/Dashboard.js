import React, { Fragment } from 'react';

import Navbar from './Navbar';
import { Footer } from './Footer';
import { Subscribe } from './Subscribe';
import Articles from '../article/Articles';

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
                                <b>Total Cases</b>: 1,956,077
							</p>&nbsp;
                            <p>
                                <b>Deaths</b>: 125,123
							</p>
                        </div>
                        <div>
                            <sub>updated Wednesday April 13th, 2020</sub>
                        </div>
                    </header>
                    <span className="image featured"><img src="images/feature.jpg" alt="" /></span>
                </section>
                <section className="box special features">
                    <div className="features-row">
                        <Articles />
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
