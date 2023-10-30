import classes from "./NewEventForm.module.css";

function NewEventForm(props) {
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = event.target.title.value;
        const enteredImage = event.target.image.value;
        const enteredLocation = event.target.location.value;
        const enteredDate = event.target.date.value;
        const enteredDescription = event.target.description.value;
        const enteredIsFeatured = event.target.isFeatured.checked;

        const eventData = {
            title: enteredTitle,
            image: enteredImage,
            location: enteredLocation,
            date: enteredDate,
            description: enteredDescription,
            isFeatured: enteredIsFeatured,
        };

        // console.log(eventData);
        props.onAddEvent(eventData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Event Title</label>
                <input type="text" required id="title" />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Event Image</label>
                <input type="text" required id="image" />
            </div>
            <div className={classes.control}>
                <label htmlFor="location">Location</label>
                <input type="text" required id="location" />
            </div>
            <div className={classes.control}>
                <label htmlFor="date">Date</label>
                <input type="text" required id="date" />
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Description</label>
                <textarea id="description" required rows="5"></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor="isFeatured">isFeatured</label>
                <input type="checkbox" id="isFeatured"></input>
            </div>
            <div className={classes.actions}>
                <button>Add Event</button>
            </div>
        </form>
    );
}

export default NewEventForm;
