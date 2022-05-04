import PokemonInfo from "./PokeInfo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: PokemonInfo,
  title: "PokemonInfo",
} as ComponentMeta<typeof PokemonInfo>;

const Template: ComponentStory<typeof PokemonInfo> = (args) => (
  <PokemonInfo {...args} />
);

export const Default = Template.bind({});

Default.args = {
  data: {
    abilities: [
      { ability: { name: "name", url: "url" }, is_hidden: false, slot: 10 },
    ],
    types: [{ slot: 10, type: { name: "name", url: "url" } }],
    base_experience: 10,
    forms: [],
    height: 10,
    id: 10,
    moves: [{ move: { name: "string", url: "string" } }],
    name: "name",
    sprites: {
      front_default: "url",
    },
    weight: 10,
  },
};
