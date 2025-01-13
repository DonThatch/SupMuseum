import React from 'react';
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import '../Styles/AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <Header/>

            <div className="aboutUsContainer">
                <h1>About the Museum</h1>
                <p>
                    The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone
                    to experience and enjoy. The Museum lives in two iconic sites in New York City — The
                    Met Fifth Avenue and The Met Cloisters. Millions of people also
                    take part in The Met experience online.
                </p>
                <p>
                    Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and
                    beautiful objects. Every day, art comes alive in the Museum's galleries and through its exhibitions
                    and events, revealing new ideas and unexpected connections across time and across cultures.
                </p>
                <p>
                    The Met's collection represents the finest achievements in human history, from the dawn of
                    civilization to the present day. Our extensive collection includes masterpieces of painting,
                    sculpture, and decorative arts from all over the world, spanning centuries and continents.
                </p>
                <p>
                    Visitors to The Met can explore ancient Egyptian artifacts, marvel at the intricate detail of
                    European paintings, and experience the beauty of modern and contemporary art. The Met's exhibitions
                    and programs engage diverse audiences and encourage a deeper understanding and appreciation of the
                    arts.
                </p>
                <p>
                    In addition to our physical galleries, The Met is committed to making art accessible to everyone
                    through our comprehensive digital presence. Our website and online resources offer virtual tours,
                    educational materials, and detailed information about our collections and exhibitions, allowing
                    people from around the globe to connect with our museum.
                </p>
                <h2>Mission Statement</h2>
                <p>
                    The Metropolitan Museum of Art collects, studies, conserves, and presents significant works of art
                    across time and cultures in order to connect all people to creativity, knowledge, ideas, and one
                    another.
                </p>
                <h2>Our Commitment</h2>
                <p>
                    We are dedicated to maintaining the highest standards of excellence in all our activities. This
                    includes our commitment to scholarly research, conservation, and the interpretation of art. We
                    strive to create a welcoming and inclusive environment for all visitors, fostering a sense of
                    community and connection through our diverse programs and initiatives.
                </p>
                <p>
                    The Met also plays a critical role in the cultural and educational life of New York City. Through
                    partnerships with local schools, community organizations, and cultural institutions, we provide
                    educational opportunities and resources that enrich the lives of people of all ages.
                </p>
                <p>
                    Thank you for being part of our journey. We invite you to explore our collections, participate in
                    our programs, and join us in celebrating the transformative power of art. For more information or to
                    plan your visit, please visit our <a href="/src/page/ContactPage">Contact Us</a> page or explore our website for
                    more details.
                </p>
            </div>

            <Footer/>
        </>
    );
};

export default AboutUs;
