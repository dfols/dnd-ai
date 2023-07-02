export default function HomePage() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen ">
      <div className="p-10 bg-white rounded-lg shadow-md space-y-6 text-center w-3/4">
        <h1 className="text-4xl font-bold mb-4">D&D Character Creation</h1>
        <p className="text-lg mb-4">
          Welcome to the D&D Character Creation app! Here you can create your
          own D&D character by answering a set of questions. You can save your
          characters and access them anytime.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </a>
          <a
            href="/signup"
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </a>
          <a
            href="/create"
            className="inline-block bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Create a Character
          </a>
        </div>
      </div>
    </div>
  );
}
