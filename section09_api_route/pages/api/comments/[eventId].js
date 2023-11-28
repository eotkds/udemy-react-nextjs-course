import { connectDatabase, getAllDocuments, insertDocument } from '../../../helpers/db-util';

async function handler(req, res) {
    const eventId = req.query;
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
        return;
    }

    if (req.method === 'POST') {
        const { email, name, text } = req.body;

        if (
            !email ||
            email.trim() === '' ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !text ||
            text.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }
        const newComment = {
            email,
            name,
            text,
            eventId,
        };

        let insertResult;
        try {
            insertResult = await insertDocument(client, 'events', 'comments', newComment);
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!' });
            return;
        }

        newComment._id = insertResult.insertedId;

        res.status(201).json({ message: 'Added comment.', comment: newComment });
    }

    if (req.method === 'GET') {
        let documents;
        try {
            documents = await getAllDocuments(client, 'events', 'comments', { _id: -1 });
        } catch (error) {
            res.status(500).json({ message: 'Getting data failed!' });
            return;
        }

        res.status(200).json({ comments: documents });
    }

    client.close();
}

export default handler;
