const AboutUs = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Email: ishak.larbi@inttic.dz Phone Number: +213-777-209-008</p>
        </div>
    );
};

export default AboutUs;
export async function getServerSideProps() {
    return {
        props: {
            title: "About Us Page ",
        },
    };
}
