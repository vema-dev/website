import ScrollObserver from "../helpers/scroll-observer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}
export default MyApp;
