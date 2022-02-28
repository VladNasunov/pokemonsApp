import auth from "./auth/authReducer";
import pokemons from "./pokemons/pokemonsReducer";
const rootReducer = {
  auth,
  pokemons,
};
export default rootReducer;
