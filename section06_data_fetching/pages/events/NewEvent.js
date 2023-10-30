import NewEventForm from "../../components/events/NewEventForm";
import { useRouter } from "next/router";

function NewEventPage() {
    function addEventHandler(eventData) {
        console.log(eventData);
        const router = useRouter();

        fetch(
            "https://nextjs-course-a001f-default-rtdb.firebaseio.com/events.json",
            {
                method: "POST",
                body: JSON.stringify(eventData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            router.push("/");
        });
    }

    return (
        <section>
            <h1>Add New Event</h1>
            <NewEventForm onAddEvent={addEventHandler} />
        </section>
    );
}

export default NewEventPage;
