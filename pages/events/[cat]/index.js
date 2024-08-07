import City_events from "../../../src/components/events/city_event";

const City_events_page = ({ data, id }) => {
    return (
        <div>
            <h1>Events In {id}</h1>
            <City_events data={data} id={id} />
        </div>
    );
};

export default City_events_page;

export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");
    const all_paths = events_categories.map((ev) => {
        return {
            params: {
                cat: ev.id.toString(),
            },
        };
    });
    return {
        paths: all_paths,
        // this fallback to prevent typed links that aren't in the paths
        fallback: false,
    };
}

// Without getStaticProps, getStaticPaths does nothing so its required even if you pass empty props object
export async function getStaticProps(context) {
    const { all_events } = await import("/data/data.json");
    const id = context?.params.cat;
    const data = all_events.filter((event) => event.city === `${id}`);
    return {
        props: {
            data: data,
            id: id,
        },
    };
}
