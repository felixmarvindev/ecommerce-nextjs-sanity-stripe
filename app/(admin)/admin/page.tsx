export default function AdminHomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-lg text-zinc-800 dark:text-zinc-200 mb-8">
        Welcome to the admin panel. Here you can manage your application.
      </p>
      {/* Add more admin controls/components here */}
      <div className="w-full max-w-md rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 shadow">
        <p className="text-zinc-600 dark:text-zinc-300">
          This is a template for the admin home page. Add links, metrics, or management tools here.
        </p>
      </div>
    </main>
  );
}
