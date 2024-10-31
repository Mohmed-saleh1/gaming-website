export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-black grid grid-cols-9">
      <div className="bg-red-300 col-span-1">sidebar</div>
      <div className="bg-blue-400 col-span-8">
        the rest of the web app {children}{" "}
      </div>
    </main>
  );
}
