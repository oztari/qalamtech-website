export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </main>
  );
}
