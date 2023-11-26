import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const url = `${process.env.DB_HOST}`;
    const client = new MongoClient(url);
    const dbName = 'newsletter';

    if (req.method == 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('emails');
        const insertResult = await collection.insertOne({ email: userEmail });

        client.close();
        res.status(201).json({ message: 'Signed up!', email: userEmail });
    }
}

export default handler;
