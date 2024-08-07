import Main_layout from "../src/components/layout/main_layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Main_layout>
            <Component {...pageProps} />
        </Main_layout>
    );
}
