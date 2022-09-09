import { Pagination } from "./components/Pagination/Pagination";
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
      <Pagination page={0} />
      <Footer />
    </>
  );
}

export default App;
