import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product" component={ProductScreen} exact />
      </Container>
    </BrowserRouter>
  );
};

export default App;
