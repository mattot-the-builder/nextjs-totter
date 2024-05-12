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

export default function TottForm() {
    const [tottContent, setTottContent] = useState("");

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTottContent(e.target.value);
    };

    const submitTottForm = () => {
        const newTot: Tott = {
            username: "anon",
            content: tottContent
        }

        console.log(newTot);
    }

    return (
        <Card className="w-80 md:w-96">
            <CardHeader>
                <CardTitle>Add New Tott</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea onChange={handleOnChange} value={tottContent} placeholder="express your tott here" />
                <p className="text-red-500">current content : {tottContent}</p>
            </CardContent>
            <CardFooter>
                <Button onClick={submitTottForm} className="min-w-28">tott</Button>
            </CardFooter>
        </Card >
    )
}
