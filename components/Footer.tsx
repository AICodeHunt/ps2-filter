import React from 'react';

export const Footer = () => {
    return (
        <div>
            <div className="pt-10 flex flex-row items-center justify-center mb-2 text-slate-800 text-sm">
                <a href="https://ps2filter.art/privacy-policy" className="pl-2 pr-2">Privacy</a>
                <a href="https://ps2filter.art/terms-of-service" className="pl-2 pr-2">Terms</a>
            </div>
            <div className="bg-white text-center text-sm text-slate-800 pb-2">
            © 2024
                <span className="ml-1 mr-1">
                    <a href="https://ps2filter.art">PS2 Filter.</a>
                </span>
                All rights reserved.
            </div>
        </div>
    );
};
