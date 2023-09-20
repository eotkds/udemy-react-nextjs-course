import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetupData) {
        console.log(meetupData);
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>;
}

export default NewMeetupPage;