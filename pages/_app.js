import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import { useEffect, useState } from "react";
import '../util/i18n'
import i18n from "../util/i18n";

function MyApp({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);

    useEffect(() => {
        if (isClient) {
            const lang = localStorage.getItem('lang')
            if (lang) {
                i18n.changeLanguage(lang)
            } else {
                localStorage.setItem('lang', 'uz')
            }
        }

    }, [isClient]);


    return isClient ? (<>
        <Component {...pageProps} />
    </>) : <></>
}

export default MyApp
