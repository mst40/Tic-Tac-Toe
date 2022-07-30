import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Square
//tag内の{}は描画されるもの
function Square(props) {
  render() {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
}
  
//Board
//Squareが親
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    //slice()でsquareをコピー
    const squares = this.state.squares.slice();
    squares[i] = 'x';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    );  
  }
  
  render() {
    const status = 'Next player: X';
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  
//Game
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
           <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
  
// ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  
// <div>はビルド時にReact.createElement('div')に変換される
//このReactコンポーネントは独立して動くので再帰可能
class ShoppiingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

