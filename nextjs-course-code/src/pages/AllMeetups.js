import DUMMY_DATA from "../data/dummy-data.js";

function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <ul>
            {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>;
            })}
        </ul>
    </section>;
}

export default AllMeetupsPage;