import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-300 py-6">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <p>
                        Designed and coded by <span className="font-bold">Anthony Barros</span> © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;