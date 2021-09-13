import { Component } from "react";
import Options from "./Options";
import Recordatory from "./Recordatory";
import data from "../data.json";

export default class Design extends Component {

  state = {
    count: 1,
    prevSelection: "",
    currentId: "1"
  }

  render() {
    const d = data.find(el => el.id === this.state.currentId);
    return (
      <div className="layout">
        <h1 className="historia">{d.historia}</h1>

        <div className="opciones">
          <Recordatory id="A" desc={d.opciones.a} onSelect={this.handleSelect} />
          <Recordatory id="B" desc={d.opciones.b} onSelect={this.handleSelect} />
        </div>

        <div className="recordatorio">
          <Options prevSelection={this.state.prevSelection} />
        </div>
      </div>
    )
  }

  handleSelect = e => {
    if(this.state.count > 4) {
      alert("Fin.");
    } 
    else {
      const currentId = this.state.count + 1 + e.target.id.toLowerCase();

      this.setState({
        count: this.state.count + 1,
        prevSelection: e.target.id,
        currentId: currentId
      })
    }
  }
}