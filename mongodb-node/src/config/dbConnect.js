import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ronialura:123@alura.5bloeic.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;