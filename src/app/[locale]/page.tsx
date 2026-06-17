import { Navbar } from "@/components/header/navbar";

export default function Home(): React.JSX.Element {
  return (
    <main className="mx-auto min-h-screen w-full px-4">
      <Navbar />
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="mx-auto mb-8 max-w-xl space-y-2 pt-12">
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-full rounded-md border" />
          <div className="bg-accent h-4 w-1/2 rounded-md border" />
        </div>
      ))}
    </main>
  );
}
