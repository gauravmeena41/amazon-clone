import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { store } from "../app/store";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
