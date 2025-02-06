import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/SriHarsha-Godavarthi/redux-shopping-cart"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/SriHarsha-Godavarthi/redux-shopping-cart
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="https://reduxstore-harsha.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sri Harsha
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;