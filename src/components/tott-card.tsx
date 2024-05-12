import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function TottCard() {
    const totts: Tott[] = [
        {
            username: "johndoe",
            content: "Hello World!",
        },
        {
            username: "anon",
            content: "la lala malaysia ku",
        },
    ];

    return (
        <div className="grid gap-4">
            {
                totts.map((tott: Tott) => (
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
    );
}
