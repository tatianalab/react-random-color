import React from 'react';
import Button from './Button';

class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: [79, 12, 25]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is: {this.formatColor(this.state.color)} !
         </h1>
         <div>
         <Button
          onClick={this.handleClick}
          light={this.isLight()} />
          </div>
      </div>
    );
  }
}

export default Random;
