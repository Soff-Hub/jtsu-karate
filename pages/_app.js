import "swiper/css";
import "swiper/css/navigation";
import '../public/assets/css/style.css';
import { useEffect, useState } from "react";
import '../util/i18n'
import i18n from "../util/i18n";
import { v4 as uuidv4 } from 'uuid';
import client from "../repositories/repository";

function MyApp({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false)

    const registerUser = async (id) => {
        await client.get(`common/visit/${id}/`)
    }

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
            const user_id = localStorage.getItem('user_id')
            if (user_id) {
                registerUser(user_id)
            } else {
                const id = uuidv4()
                localStorage.setItem('user_id', id)
                registerUser(id)
            }


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
