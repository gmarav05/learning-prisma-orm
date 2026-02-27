import Image from "next/image";
import { seedDB } from "../actions/index.js";

export default async function Home() {
  await seedDB();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}
