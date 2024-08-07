import styles from "../../../styles/Home.module.css";
import Events_page from "../events/events_page";

const Home_page = ({ data, title }) => {
    return (
        <main className={styles.main}>
            <h1>{title}</h1>
            <Events_page data={data} />
        </main>
    );
};

export default Home_page;
