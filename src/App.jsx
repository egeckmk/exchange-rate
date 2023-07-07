import Converter from "./components/Converter";
import Header from "./components/Header";
import Info1 from "./components/Info1";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Converter />
      <Info1 />
    </Provider>
  );
}

export default App;
