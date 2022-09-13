import { GlobalStyle } from "./global";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { List } from "./views/PokemonList/List";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <List />
      <Footer />
    </>
  );
}

export default App;
