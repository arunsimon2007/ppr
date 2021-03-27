import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import About from "./containers/About";
import Illustration from "./containers/Illustration";
import Design from "./containers/Design";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/illustration" component={Illustration} />
            <Route path="/design" component={Design} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
