// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCTS_PRICES } from "@/config/products";

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const

export const MODELS = {
  name : "models",
  options: [
    {
      label:"iPhone 16",
      value: "iphone-16"
    },
    {
      label:"iPhone 15",
      value: "iphone-15"
    },
    {
      label:"iPhone 14",
      value: "iphone-14"
    }
  ]
} as const

export const MATERIALS = {
  name: "materials",
  options: [
    {
      label: "Silicon",
      value: "silicone",
      description: undefined,
      price: PRODUCTS_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: 'Scratch resistant coating',
      price: PRODUCTS_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: "materials",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCTS_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: 'Soft grippy texture',
      price: PRODUCTS_PRICES.finish.textured,
    },
  ],
} as const