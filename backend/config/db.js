// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect("mongodb+srv://foodDel:54321@cluster0.auzkdwk.mongodb.net/food_delivery-app_react").then(()=>console.log("DB connected"));
// }


import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://abinayaash06_db_user:CbO1kQHlQnmn2SB6@ac-zjj6rpk-shard-00-00.ebsftyd.mongodb.net:27017,ac-zjj6rpk-shard-00-01.ebsftyd.mongodb.net:27017,ac-zjj6rpk-shard-00-02.ebsftyd.mongodb.net:27017/?ssl=true&replicaSet=atlas-4iyelm-shard-0&authSource=admin&appName=Cluster0"
        );

        console.log("DB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:");
        console.error(error);
    }
};