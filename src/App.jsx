import Converter from "./components/Converter";
import Header from "./components/Header";
import Info from "./components/Info";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Converter />
      <Info />
    </Provider>
  );
}

export default App;
