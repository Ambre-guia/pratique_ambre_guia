const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Contact = require("../models/Contact");
const contactRoutes = require("../routes/contact");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", contactRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Contact CRUD Operations", () => {
  test("It should create a contact", async () => {
    const response = await request(app).post("/api/contacts").send({
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.firstname).toBe("John");
  });

  test("It should fail creating a contact with invalid email", async () => {
    const response = await request(app).post("/api/contacts").send({
      firstname: "John",
      lastname: "Doe",
      email: "invalidemail",
    });
    expect(response.statusCode).toBe(400);
  });

  // Add more tests for empty fields, valid format, etc.
});
