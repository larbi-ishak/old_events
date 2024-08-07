import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    // the programmatically(manually) way routing
    const router = useRouter();
    let click_handle = (e) => {
        console.log(e);
        router.push("/about-us");
    };

    return (
        // here we aren't using return keyword we are just returning what is inside ( )
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className="logo_container">
                    <Image
                        className="logo"
                        width={50}
                        height={50}
                        alt="none"
                        src={"/web_logo.png"}
                    />
                </div>
                <div className="links">
                    <Link legacyBehavior href="/">
                        Home
                    </Link>
                    <Link legacyBehavior href="/events">
                        Events
                    </Link>
                    {/* <Link legacyBehavior href="/about-us">
                    About Us
                </Link> */}
                    <a onClick={(e) => click_handle(e)}>aboutUs</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
