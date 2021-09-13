import { Component } from 'react'

export default class Options extends Component {
  
  state = {
    history: []
  }


  render() {
    const { prevSelection } = this.props;

    return (
      <>
        <h3>Last selected: {prevSelection}</h3>
        <h4>Chosen options record:</h4>
        <ul>
          {/*renders every selection in history except the last one (the newest) */}
          { this.state.history.slice(0, -1).map((el, i) => <li key={i}>{el}</li> ) }
        </ul>
      </>
    )
  }

  static getDerivedStateFromProps(props, state){  

    if(props.prevSelection !== "") {
      return {
        history:  [...state.history, props.prevSelection]
      }
    } else {
      return null;
    }
  }
}