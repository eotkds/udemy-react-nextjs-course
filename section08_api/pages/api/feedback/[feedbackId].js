import { buildFeedbackPath, extractFeedback } from './index';

function handler(req, res) {
    // console.log(req);
    if (req.method === 'GET') {
        const feedbackId = req.query.feedbackId;
        const filepath = buildFeedbackPath();
        const feedbackData = extractFeedback(filepath);

        const selectedFeedback = feedbackData.find((feedback) => feedback.id === feedbackId);

        res.status(200).json({ message: 'This works!', feedback: selectedFeedback });
    }
}

export default handler;
