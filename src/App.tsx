import { Button, Card, Dialog, Flex } from "@radix-ui/themes";

import { Avatar } from "radix-ui";

import "./App.css";

import {
    Virus,
    Lightning
} from "@phosphor-icons/react";
import { TEdition, TFeature, TFeatureValue } from "./types";

const editions: TEdition[] = [
    {
        id: "basic",
        name: "Basic tier",
        price: 50,
    },
  {
    id: "pro",
    name: "Ultimate Pro",
    price: 59,
  }
];

const features: TFeature[] = [
    {
        displayName: "Encription Speed",
        values: [
            { editionId: "basic", value: "1 DC/min" }
        ],
    },
    {
        displayName: "Fuel Consumption",
        values: [
            { editionId: "basic", value: "8l / 100GB" }
        ],
    },
    {
        displayName: "Scare Factor Quotient",
        values: [
            { editionId: "basic", value: "☠️" }
        ],
    },
    {
        displayName: "Easter Eggs",
        values: [
            { editionId: "basic", isTickbox: true, value: false }
        ],
    },
    {
        displayName: "Payment Options",
        values: [
            { editionId: "basic", value: "Cash only" }
        ],
    },
    {
        displayName: "Ransom Autocollect™",
        values: [
            { editionId: "basic", isTickbox: true, value: true }
        ],
    },
    {
        displayName: '"Get Out Of Jail"-Card Included',
        values: [
            { editionId: "basic", isTickbox: true, value: false }
        ],
    },
    {
        displayName: "Is Cool",
        values: [
            { editionId: "basic", isTickbox: true, value: false }
        ],
    },
];

function TestimonialCard({ name, role, company, content, rating, image }: any) {
    return (
        <Card className="rounded-lg border border-neutral-6">
            <div className="p-6 space-y-4">
                <div className="flex text-accent-9">
                    {[...Array(5)].map((_, i) => (
                        <>
                            {i < rating ? <Star key={i} weight="fill" /> : <Star key={i} />}
                        </>
                    ))}
                </div>
                <div className="flex items-start gap-2">
                    <div>
                        <Avatar.Root className="AvatarRoot">
                            <Avatar.Image src={image} className="AvatarImage" />
                            <Avatar.Fallback className="AvatarFallback">
                                <Quotes />
                            </Avatar.Fallback>
                        </Avatar.Root>
                    </div>
                    <p className="text-neutral-11 italic">{content}</p>
                </div>
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-neutral-11">
                        {role} {company ? "at" : ""} {company}
                    </p>
                </div>
            </div>
        </Card>
    );
}

function App() {
    const testimonials = [
      {
        name: "Test",
        role: "",
        company: "",
        content: "Very nice product, would use again.",
        rating: 5,
        image: test,
      }
}

