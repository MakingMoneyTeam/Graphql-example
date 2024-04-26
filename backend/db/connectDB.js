import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `MongoDB Connected: ${connection.connection.host} ${connection.connection.name}`
        );
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};
