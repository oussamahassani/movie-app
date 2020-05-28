import React, { Component } from "react";
import Spiner from "./components/spiner";
import Recherche from "./Pagerecherche";

class Spinnerourechrche extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    //Appel
    const Spinner = Spiner(Recherche);

    return (
      <div>
        <Spinner isLoading={this.state.isLoading} />
      </div>
    );
  }
}
export default Spinnerourechrche