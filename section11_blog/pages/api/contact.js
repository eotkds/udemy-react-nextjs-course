import { MongoClient, ServerApiVersion } from "mongodb";

async function handler(req, res) {
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster_name}.vrhmvul.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.mongodb_cluster_name}`;
    const uri = process.env.MONGODB_URI;

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
            const client = new MongoClient(connectionString);
            const database = client.db(process.env.mongodb_database);
            const myMessage = database.collection("messages");
            const result = await myMessage.insertOne(newMessage);
            newMessage.id = result.insertedId;
            await client.close();
        } catch (error) {
            res.status(500).json({ message: "Could not store message" });
        }

        res.status(201).json({ message: "Successfully stored message!", message: newMessage });
    }
}

export default handler;
