import mongoose from "mongoose";

/**
 * Connect to MongoDB.
 * @param {string} url - The MongoDB connection string.
 * @returns {Promise<void>} - Resolves when the connection is successful or throws an error if it fails.
 */

export async function connectToMongoDB(url: string): Promise<void> {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB successfully");
    } catch (error: any) {
        console.error("Failed to connect to MongoDB:", error.message);
        throw error; 
    }
}
