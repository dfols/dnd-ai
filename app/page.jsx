export default function HomePage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl mb-4">D&D Character Creation</h1>
      <p className="mb-4">
        Welcome to the D&D Character Creation app! Here you can create your own
        D&D character by answering a set of questions. You can save your
        characters and access them anytime.
      </p>
      <div className="space-x-4">
        <a href="/login" className="btn btn-primary">
          Login
        </a>
        <a href="/signup" className="btn btn-secondary">
          Sign Up
        </a>
        <a href="/create" className="btn btn-tertiary">
          Create a Character
        </a>
      </div>
    </div>
  );
}
