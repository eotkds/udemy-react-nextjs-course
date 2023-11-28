import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const url = `${process.env.DB_HOST}`;
    const client = new MongoClient(url);
    await client.connect();
    return client;
}

export async function insertDocument(client, DBName, collection, document) {
    const db = client.db(DBName);
    const collectionResult = db.collection(collection);
    const insertResult = await collectionResult.insertOne(document);
    return insertResult;
}

export async function getAllDocuments(client, DBName, collection, sort) {
    const db = client.db(DBName);
    const collectionResult = db.collection(collection);
    const documents = await collectionResult.find({}).sort(sort).toArray();
    return documents;
}
