import { Link } from "react-router-dom";

export const PokemonsColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name: string) => (
      <>
        <Link to={`${name}`}>{name}</Link>
      </>
    ),
  },
  {
    title: "Url",
    dataIndex: "url",
    key: "url",
  },
];
