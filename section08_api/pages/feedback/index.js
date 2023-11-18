import { useState, Fragment } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
    const [feedbackData, setFeedbackData] = useState();

    function loadFeedbackHandler(id) {
        fetch(`/api/feedback/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFeedbackData(data.feedback);
                console.log(data);
            });
    }

    const { feedbackItems } = props;
    return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {feedbackItems.map((item) => (
                    <li key={item.id}>
                        {item.text}
                        <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Detail</button>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export async function getStaticProps() {
    const filepath = buildFeedbackPath();
    const data = extractFeedback(filepath);

    return {
        props: {
            feedbackItems: data,
        },
        revalidate: 600,
    };
}

export default FeedbackPage;
