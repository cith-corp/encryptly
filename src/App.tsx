import { Button, Card, Dialog, Flex, Table, Text, Separator } from "@radix-ui/themes";

import dmtry from "./assets/DK1-002.jpg";
import elon from "./assets/elon.jpg";
import miguel from "./assets/miguel.jpg";

import "./App.css";

import {
    Virus,
    Lightning
} from "@phosphor-icons/react";
import { TEdition, TFeature, TFeatureValue } from "./types";

const editions: TEdition[] = [
    {
      id: "basic",
      name: "Ultimate Basic",
      price: 29,
    },
    {
      id: "pro",
      name: "Ultimate Pro",
      price: 59,
    },
    {
      id: "ultimate",
      name: "Ultimate Ultimate",
      price: 666,
    },
  ];

const features: TFeature[] = [
    {
        displayName: "Test",
        values: [
          { editionId: "basic", value: "1 DC/min" },
          { editionId: "pro", value: "5 DC/min" },
          { editionId: "ultimate", value: "5+ DC/min" },
        ],
      },
      {
        displayName: "Fuel Consumption",
        values: [
          { editionId: "basic", value: "8l / 100GB" },
          { editionId: "pro", value: "6l / 100GB" },
          { editionId: "ultimate", value: "2l / 100KB" },
        ],
      },
      {
        displayName: "Scare Factor Quotient",
        values: [
          { editionId: "basic", value: "☠️" },
          { editionId: "pro", value: "☠️☠️" },
          { editionId: "ultimate", value: "☠️☠️☠️" },
        ],
      },
      {
        displayName: "Easter Eggs",
        values: [
          { editionId: "basic", isTickbox: true, value: false },
          { editionId: "pro", isTickbox: true, value: true },
          { editionId: "ultimate", value: "Maybe" },
        ],
      },
      {
        displayName: "Payment Options",
        values: [
          { editionId: "basic", value: "Cash only" },
          {
            editionId: "pro",
            value: (
              <>
                <Text size="6">
                  <div className="payment-options">
                    <CurrencyJpy />
                  </div>
                </Text>
              </>
            ),
          },
          {
            editionId: "ultimate",
            value: (
              <>
                <Text size="6">
                  <div className="payment-options">
                    <CurrencyBtc />
                    <CurrencyEth />
                    <Coins />
                    <CreditCard />
                    <Bank />
                  </div>
                </Text>
              </>
            ),
          },
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


function FeatureComparisonTable() {
    return (
        <div className="overflow-x-auto">
            <Table.Root variant="surface" size="3">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>
                            <Text size="5">Feature</Text>
                        </Table.ColumnHeaderCell>
                        {editions.map((edition, index) => (
                            <Table.ColumnHeaderCell align="center" key={index}>
                                <Text size="5">{edition.name}</Text>
                            </Table.ColumnHeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {features.map((feature, index) => (
                        <Table.Row key={index}>
                            <Table.RowHeaderCell>
                                <Text size="3">{feature.displayName}</Text>
                            </Table.RowHeaderCell>
                            {editions.map((edition, index) => {
                                let data: TFeatureValue | undefined = feature.values.find(
                                    (value) => value.editionId === edition.id
                                );

                                if (!data) {
                                    return <Table.Cell align="center" key={index} />;
                                }

                                if (data.isTickbox) {
                                    return (
                                        <Table.Cell align="center" key={index}>
                                            <Text size="6" color={data.value ? "grass" : "tomato"}>
                                                {data.value ? (
                                                    <CheckCircle weight="fill" />
                                                ) : (
                                                    <XCircle weight="fill" />
                                                )}
                                            </Text>
                                        </Table.Cell>
                                    );
                                }

                                return (
                                    <Table.Cell align="center" key={index}>
                                        <Text size="3">{data.value}</Text>
                                    </Table.Cell>
                                );
                            })}
                        </Table.Row>
                    ))}
                    <Table.Row></Table.Row>
                    <Table.Row>
                        <Table.RowHeaderCell></Table.RowHeaderCell>
                        {editions.map((edition, index) => (
                            <Table.Cell align="center" key={index}>
                                <Text weight="bold" size="6">
                                    ${edition.price}
                                </Text>
                                <Text size="3">/month</Text>
                            </Table.Cell>
                        ))}
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </div>
    );
}

function Feature({ icon, title, description }: any) {
    return (
        <div className="space-y-2">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-neutral-11">{description}</p>
        </div>
    );
}

function Footer() {
    return (
        <footer className="border-t border-neutral-6 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Virus className="text-accent-9" size={24} weight="duotone" />
                            <span className="text-xl font-bold">Encryptly</span>
                        </div>
                        <p className="text-neutral-11">
                            Lowering work efficiency arround the world since 1999
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Connect With Us</h4>
                        <div className="space-y-2">
                            <a
                                href="https://github.com/cith-corp/encryptly"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <GithubLogo weight="duotone" />
                                GitHub
                            </a>
                            <a
                                href="https://x.com"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <XLogo weight="duotone" />X
                            </a>
                            <a
                                href="https://linkedin.com"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <LinkedinLogo weight="duotone" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Legal</h4>
                        <div className="space-y-2">
                            <a
                                href="/imprint"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <Article weight="duotone" />
                                Imprint
                            </a>
                            <a
                                href="/privacy"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <Shield weight="duotone" />
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold">Security</h4>
                        <div className="space-y-2">
                            <a
                                href="/bugbounty"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <Bug weight="duotone" />
                                Bug Bounty Program
                            </a>
                            <a
                                href="/security"
                                className="flex items-center gap-2 text-neutral-11 hover:text-neutral-12"
                            >
                                <Shield weight="duotone" />
                                Security Policy
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-6 text-center text-neutral-11">
                    <p>&copy; {new Date().getFullYear()} Encryptly. All rights served.</p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const testimonials = [
        {
            name: "Dmitry Yuryevich Khoroshev",
            role: "Ex-CEO",
            company: "Lockbit 3.0 Inc. Ltd.",
            content: "Very nice product, would use again.",
            rating: 2,
            image: dmtry,
        },
        {
            name: "Miguel",
            role: "",
            company: "",
            content:
                "Este aspirador de pó é o melhor que já usei. É tão potente e fácil de usar. Eu adoro!",
            rating: 5,
            image: miguel,
        },
        {
            name: "Elon Tusk",
            role: "Chief No Fuck Giver",
            company: "Tesla",
            content:
                "Our company got hit by the ransomware created by Encryptly and our DCs fell quicker than our stock price.",
            rating: 3,
            image: elon,
        },
    ];

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <header className="text-center py-20 space-y-6">
                    <div className="flex justify-center">
                        <Virus size={64} className="text-accent-9" weight="duotone" />
                    </div>
                    <h1 className="text-5xl font-bold">Encryptly</h1>
                    <p className="text-2xl text-neutral-11 max-w-2xl mx-auto">
                        Streamline your ransomware attacks
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button
                            onClick={() => {
                                window.location.href = "#pricing";
                            }}
                            className="bg-accent-9 text-white px-4 py-2 rounded-md hover:bg-accent-10 inline-flex items-center gap-2"
                        >
                            <Lightning />
                            Get Started
                        </Button>
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button className="bg-neutral-3 text-neutral-12 px-4 py-2 rounded-md hover:bg-neutral-4 inline-flex items-center gap-2">
                                    <Shield />
                                    Learn More
                                </Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>Learn More</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    A mitochondrion (pl. mitochondria) is an organelle found in the cells of most eukaryotes, such as animals, plants and fungi. Mitochondria have a double membrane structure and use aerobic respiration to generate adenosine triphosphate (ATP), which is used throughout the cell as a source of chemical energy.
                                </Dialog.Description>
                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Thanks, Nerd...
                                        </Button>
                                    </Dialog.Close>
                                    <Button
                                        onClick={() => {
                                            window.location.href =
                                                "https://en.wikipedia.org/wiki/Mitochondrion";
                                        }}
                                    >
                                        Learn even more
                                    </Button>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </div>
                </header>

                <Separator orientation="horizontal" size="4" />

                <section className="py-20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Us?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <Feature
                            icon={
                                <Lightning
                                    size={32}
                                    className="text-accent-secondary-9"
                                    weight="duotone"
                                />
                            }
                            title="Lightning Fast"
                            description="Experience blazing fast encription of all your targets data"
                        />
                        <Feature
                            icon={
                                <Shield
                                    size={32}
                                    className="text-accent-secondary-9"
                                    weight="duotone"
                                />
                            }
                            title="Secure by Design"
                            description={
                                <>
                                    Competitors use Elyptic Curve Cryptography - we use bleeding
                                    edge <u>Quantum</u> <i>Elyptic</i> <b>Circle</b> Encription
                                    Technology™
                                </>
                            }
                        />
                        <Feature
                            icon={
                                <MoneyWavy
                                    size={32}
                                    className="text-accent-secondary-9"
                                    weight="duotone"
                                />
                            }
                            title="Become rich today"
                            description="Select your targets, we take care of the rest. It's that simple."
                        />
                    </div>
                </section>

                <Separator orientation="horizontal" size="4" />

                <section className="py-20 bg-neutral-1">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Our Customers Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </section>

                <Separator orientation="horizontal" size="4" />

                <section className="py-20">
                    <h2 id="pricing" className="text-3xl font-bold text-center mb-12">
                        Simple, Transparent Pricing
                    </h2>
                    <FeatureComparisonTable />
                </section>

                <Separator orientation="horizontal" size="4" />

                <section className="py-20 text-center space-y-6">
                    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                    <p className="text-neutral-11 max-w-xl mx-auto">
                        Join thousands of satisfied customers who have successfully been
                        encrypted with Encryptly
                    </p>
                    <Button
                        className="bg-accent-9 text-white px-6 py-3 rounded-md hover:bg-accent-10 inline-flex items-center gap-2"
                        onClick={() => alert("Test")}
                    >
                        <Lock weight="fill" />
                        Get Encrypted Now
                    </Button>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default App;

