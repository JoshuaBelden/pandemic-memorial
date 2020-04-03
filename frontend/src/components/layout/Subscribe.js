import React from 'react';

export const Subscribe = () =>
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
