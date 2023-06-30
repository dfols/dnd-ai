import { connectToDatabase } from "../../../utils/mongodb";
import bcrypt from "bcrypt";
import User from "../../../models/User";

// Named export for the API route
export async function POST(req) {
  await connectToDatabase();
  const { username, password, email } = await req.json();

  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return new Response({ status: 400, statusText: "User already exists" });
  }

  // convert password to string for bcrypt
  let stringPassword = password.toString();

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(stringPassword, 10);

  let newUser = new User({
    username,
    password: hashedPassword,
    email,
  });

  // Save user to the database
  await newUser.save();

  let options = {
    status: 201,
  };

  let responseJSON = new Response(JSON.stringify(newUser), options);
  return responseJSON;
}
