import { useEffect, useState, useContext } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const notificationCtx = useContext(NotificationContext);
    const [isFetchingComments, setIsFetchingComments] = useState(false);
    useEffect(() => {
        setIsFetchingComments(true);
        if (showComments) {
            fetch('/api/comments/' + eventId)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);\
                    setComments(data.comments);
                    setIsFetchingComments(false);
                });
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        console.log(showComments);
        setShowComments((prevStatus) => !prevStatus);
        // if (!showComments) {
        //     fetch('/api/comments/' + eventId)
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(data);
        //             setComments(data.comments);
        //         });
        // }
    }

    function addCommentHandler(commentData) {
        // send data to API

        notificationCtx.showNotification({
            title: 'fetching comments',
            message: 'fetching comments for ' + eventId,
            status: 'pending',
        });

        fetch('/api/comments/' + eventId, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                return response.json();
            })
            .then((data) => {
                notificationCtx.showNotification({
                    title: 'fetching Success!',
                    message: 'Successfully fetched comments!',
                    status: 'success',
                });
            })
            .catch((error) => {
                notificationCtx.showNotification({
                    title: 'Error!',
                    message: error.message || 'Something went wrong!',
                    status: 'error',
                });
            });
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && !isFetchingComments && <CommentList items={comments} />}
            {showComments && isFetchingComments && <p>Loading...</p>}
        </section>
    );
}

export default Comments;
