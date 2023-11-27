import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const eventId = req.query;
    const url = `${process.env.DB_HOST}`;
    const client = new MongoClient(url);

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
        await client.connect();
        const dbName = 'events';
        const db = client.db(dbName);
        const collection = db.collection('comments');
        const insertResult = await collection.insertOne(newComment);
        newComment._id = insertResult.insertedId;

        res.status(201).json({ message: 'Added comment.', comment: newComment });
    }

    if (req.method === 'GET') {
        const dbName = 'events';
        const db = client.db(dbName);
        const collection = db.collection('comments');
        const documents = await collection.find({}).sort({ _id: -1 }).toArray();
        console.log(documents);

        res.status(200).json({ comments: documents });
    }

    client.close();
}

export default handler;
