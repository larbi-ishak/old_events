import Image from "next/image";
import Link from "next/link";
import eventsStyles from "../../../styles/events.module.css";

const Events_page = ({ data }) => {
    return (
        <>
            <div className={eventsStyles.container}>
                {data.map((cat) => {
                    return (
                        <Link
                            // legacyBehavior to let us use anchor tag inside the link component
                            legacyBehavior
                            href={`/events/${cat.id}`}
                            key={cat.id}
                            passHref
                        >
                            <a>
                                <h2> {cat.title}</h2>
                                <Image
                                    alt="nothing"
                                    src={`${cat.imageSrc}`}
                                    width={"250"}
                                    height={"250"}
                                />
                                <p>{cat.description}</p>
                            </a>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Events_page;
