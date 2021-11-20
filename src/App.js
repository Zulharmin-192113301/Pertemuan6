import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super();
    this.myRef = React.createRef();
  }

  componentDidMount(){
    this.myRef.current.style.height = '100vh'
    this.myRef.current.style.width = '100%'
  }

  setBackground(bgColor, txtColor){
    this.myRef.current.style.background = bgColor
    this.myRef.current.style.color = txtColor
  }

  render() {

    return (
      <div ref={this.myRef}>
      <p>Belajar pengembangan aplikasi web dengan Reactjs dengan topik Router dan Refs</p>
      <button onClick={this.setBackground.bind(this, 'white', 'black')}> WHITE </button>
      <button onClick={this.setBackground.bind(this, 'red', 'white')}> RED </button>
      <button onClick={this.setBackground.bind(this, 'green', 'white')}> GREEN </button>
      <button onClick={this.setBackground.bind(this, 'blue', 'white')}> BLUE </button>
  </div>
  );
  }
}

export default App;