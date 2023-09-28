import MeetupList from "../components/meetups/MeetupList.js";
import { useState, useEffect } from "react";
// import DUMMY_DATA from "../data/dummy-data.js";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-760da-default-rtdb.firebaseio.com/meetups.json')
            .then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                };
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return <section>
        <h1>All Meetups</h1>
        <ul>
            <MeetupList meetups={loadedMeetups} />
        </ul>
    </section>;
}

export default AllMeetupsPage;