import Image from "next/image";
import { Inter } from "next/font/google";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [totts, setTotts] = useState([] as Tott[]);
  const [tottContent, setTottContent] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTottContent(e.target.value);
  };

  const submitTottForm = () => {
    const newTot: Tott = {
      username: "anon",
      content: tottContent
    };

    setTotts(t => [...t, newTot]);

    console.log(newTot);
  }

  const latestTotts = totts.slice().reverse();

  return (
    <main
      className={`min-h-screen min-w-full p-8 ${inter.className}`}
    >
      <div className="w-full grid place-content-center place-items-center gap-4">
        <header className="grid place-items-center gap-8">
          <h1 className="text-5xl font-bold">Totter</h1>
          <Card className="w-80 md:w-96">
            <CardHeader>
              <CardTitle>Add New Tott</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea onChange={handleOnChange} value={tottContent} placeholder="express your tott here" />
            </CardContent>
            <CardFooter>
              <Button onClick={submitTottForm} className="min-w-28">tott</Button>
            </CardFooter>
          </Card >

        </header>

        <div className="grid gap-4">
          {
            latestTotts.length > 0 && latestTotts.map((tott: Tott) => (
              <Card className="w-80 md:w-96">
                <CardHeader>
                  <CardTitle>@{tott.username}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tott.content}</p>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            ))
          }
        </div>

      </div>
    </main>
  );
}
