import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-center gap-6">
      <h1 className="text-5xl font-bold">Invoice</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">
            Sign In
          </Link>
        </Button>
      </p>
    </main>
  );
}
