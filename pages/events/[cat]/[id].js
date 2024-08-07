import SingleEvent from "../../../src/components/events/singleEvent";

const Single_event = ({ data }) => {
    const [event] = data;
    return (
        <div>
            {" "}
            <SingleEvent event={event} />{" "}
        </div>
    );
};

export default Single_event;

export async function getStaticPaths() {
    const { all_events } = await import("/data/data.json");
    // this limited events cerated just for testing fallback true
    // let limited_events = all_events.slice(0, 2);

    const all_paths = all_events.map((ev) => {
        // const all_paths = all_events.map((ev) => {
        return {
            params: {
                cat: ev.city,
                id: ev.id.toString(),
            },
        };
    });
    return {
        paths: all_paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { all_events } = await import("/data/data.json");

    const id = context?.params.id;

    const data = all_events.filter((event) => event.id === `${id}`);

    // here we get our result as an array containing one object because we are using filter method
    // for better and cleaner we can use find method that returns just the object
    return {
        props: {
            data: data,
        },
    };
}
