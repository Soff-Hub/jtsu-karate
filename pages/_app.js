import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import { useEffect, useState } from "react";
import "../util/i18n";
import { v4 as uuidv4 } from "uuid";
import client from "../repositories/repository";
import store from "../store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  const registerUser = async (id) => {
    await client.get(`common/visit/${id}/`);
  };

  useEffect(() => {
    setIsClient(true);

    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  useEffect(() => {
    if (isClient) {
      const user_id = localStorage.getItem("user_id");
      if (user_id) {
        registerUser(user_id);
      } else {
        const id = uuidv4();
        localStorage.setItem("user_id", id);
        registerUser(id);
      }
    }
  }, [isClient]);

  return isClient ? (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </>
  ) : (
    <></>
  );
}

export default MyApp;
