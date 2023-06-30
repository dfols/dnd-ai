import { connectToDatabase } from "../../../utils/mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { db } = await connectToDatabase();
  const { username, password } = req.body;

  // Find the user
  const user = await db.collection("users").findOne({ username });
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid username or password" });
  }

  // Check if the password is correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid username or password" });
  }

  // Here you can create a session or a token for the authenticated user
  // ...

  res
    .status(200)
    .json({ success: true, message: "User authenticated successfully" });
}
