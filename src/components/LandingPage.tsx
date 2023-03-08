import React from "react";
import Section from "./Section";
import { ReactComponent as BuySVG } from "../assets/buy-house.svg";
import { ReactComponent as FindSVG } from "../assets/find-home.svg";
import { ReactComponent as SellSVG } from "../assets/sell-house.svg";

const Service = ({ children, title }: { children?: React.ReactNode; title: string }) => (
    <div className="page__service">
        {children}
        <h3 className="page__service-title">{title}</h3>
    </div>
);

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

            <Section className="small">
                <h2 className="page__subtitle">Services</h2>
                <section className="page__services">
                    <Service title="Find Homes">
                        <FindSVG className="page__svg" />
                    </Service>

                    <Service title="Sell Homes">
                        <SellSVG className="page__svg" />
                    </Service>

                    <Service title="Buy Homes">
                        <BuySVG className="page__svg" />
                    </Service>
                </section>
            </Section>
        </div>
    );
}
