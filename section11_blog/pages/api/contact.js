import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
    // console.log(res);
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    if (req.method === "POST") {
        const { email, name, message } = req.body;

        if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
            res.status(422).json({ message: "Invalid input" });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        };

        try {
            const database = client.db("my-site");
            const myMessage = database.collection("messages");
            const result = await myMessage.insertOne(newMessage);
            newMessage.id = result.insertedId;
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Could not store message" });
        } finally {
            await client.close();
        }

        res.status(201).json({ message: "Successfully stored message!", message: newMessage });
    }
}

export default handler;
