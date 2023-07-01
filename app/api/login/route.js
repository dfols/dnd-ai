import { connectToDatabase } from "../../../utils/mongodb";
import bcrypt from "bcrypt";
import User from "../../../models/User";

// Named export for the API route
export async function POST(req) {
  await connectToDatabase();
  const { username, password } = await req.json();

  // Find the user in the database
  const user = await User.findOne({ username });

  // If user does not exist or password is incorrect, return an error response
  if (!user || !(await bcrypt.compare(password.toString(), user.password))) {
    return new Response({
      status: 401,
      statusText: "Invalid login credentials",
    });
  }

  // ...code to handle session or token generation ...

  // Return success response
  let options = {
    status: 200,
  };
  let responseJSON = new Response(
    JSON.stringify({ message: "Login successful" }),
    options
  );
  return responseJSON;
}
