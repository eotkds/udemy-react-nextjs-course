import MeetupList from "../components/meetups/MeetupList.js";
import DUMMY_DATA from "../data/dummy-data.js";

function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={DUMMY_DATA} />
        </ul>
    </section>;
}

export default AllMeetupsPage;