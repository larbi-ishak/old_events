import Image from 'next/image';
import Link from 'next/link';
import eventsStyles from "../../../styles/events.module.css";

const City_events = ({data, id}) => {
  return (
    <>
            <div className={eventsStyles.container} style={{flexWrap: "wrap"}}>
            {data.map((ev) => {
                return (
                    // we use link here instead of a to make the page not refreshes and goes to the location but just client rendering like React
                    <Link href={`/events/${id}/${ev.id}`} key={ev.id} passHref>
                        <h2> {ev.title}</h2>
                        <Image
                            src={`${ev.image}`}
                            width={250}
                            height={250}
                            alt="none"
                        />
                    </Link>
                );
            })}
            </div>
  </>
  )
}

export default City_events