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
    name: "Ultimate Basic",
    price: 29,
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