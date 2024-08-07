import Events_page from "../../src/components/events/events_page";
// we prefer in this tutorial to go with client side rendering and use Link instead of anchors

const Events_cities_page = ({ data, title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Events_page data={data} />
        </div>
    );
};

export default Events_cities_page;

export async function getStaticProps() {
    const { events_categories } = await import("/data/data.json");

    return {
        props: {
            data: events_categories,
            title: "Events Page",
        },
    };
}
