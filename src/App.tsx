import { GlobalStyle } from "./global";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { List } from "./views/PokemonList/List";

function App() {
  return (
    <div className="app">
      <div>
        <GlobalStyle />
        <Header />
        <List />
      </div>
      <Footer />
    </div>
  );
}

export default App;
