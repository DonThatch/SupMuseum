import React from 'react';
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import "../Styles/ContactPage.css";

const ContactPage = () => {
    return (
        <>
        <Header />
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions or need further information about the Met Museum, please feel free to reach out to us.</p>
                <div className="contact-info">
                    <h2>Address</h2>
                    <p>The Metropolitan Museum of Art</p>
                    <p>1000 5th Ave, New York, NY 10028, United States</p>

                    <h2>Phone</h2>
                    <p>+1 212-535-7710</p>

                    <h2>Email</h2>
                    <p>info@metmuseum.org</p>
                </div>
            </div>
        <Footer />
        </>
    );
};

export default ContactPage;
