import { connectDatabase, insertDocument } from '../../helpers/db-util';

async function handler(req, res) {
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the database failed!' });
    }

    if (req.method == 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid email address.' });
            return;
        }

        try {
            const result = await insertDocument(client, 'events', 'newsletter', { email: userEmail });
            client.close();
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong.' });
        }
        res.status(201).json({ message: 'Signed up!', email: userEmail });
    }
}

export default handler;
