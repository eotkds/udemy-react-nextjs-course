import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
    const { feedbackItems } = props;
    return (
        <ul>
            {feedbackItems.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
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
