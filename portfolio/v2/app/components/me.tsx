import Image from "next/image";
import React from "react";

const Me = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
                <Image
                    src="/me.jpg"
                    alt="Jean-Eudes Assogba"
                    className="object-cover w-full h-full"
                    width={256}
                    height={256}
                />
            </div>
            {/* Footer */}
            <footer className="mt-8 text-center text-slate-300">
                <p className="text-sm">
                    Crafted with ❤️ by Jean-Eudes Assogba
                </p>
                <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Me;
