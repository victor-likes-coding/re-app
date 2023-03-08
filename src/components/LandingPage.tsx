import React from "react";

export default function LandingPage() {
    return (
        <div className="page">
            <Section>
                <h1 className="page__title">Invest smarter with our user-centric suite of products.</h1>
                <p className="page__para">Rentify is your one-stop-shop for real estate investment. List your property hassle-free and let renters find you.</p>
                <div className="page__cta-container">
                    <div className="primary-button">Get Started</div>
                </div>
            </Section>

            <Section>
                <h2 className="page__title">Why Rentify?</h2>
                <p className="page__para">
                    Rentify is the best way to find a rental property. We have the largest selection of rental properties in the country, and we make it easy to
                    find your next home.
                </p>
            </Section>
        </div>
    );
}
