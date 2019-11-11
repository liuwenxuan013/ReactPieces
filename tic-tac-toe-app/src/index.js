import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function  Square(props) {

    return (
        <button className="square"
                onClick={props.onClick}
        >
            {props.value}
        </button>
    );

}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:true,
        };
    }
    handleClick = (i) => {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext? 'X':'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    };

    func(i) {
        return (
            < Square
                value={this.state.squares[i]}
                onClick={this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: '
        +(this.state.xIsNext ? 'X':'O');
        return (
            <div>
                <div className="status">
                    {status}
                </div>
                <div className='board-row'>
                    {this.func(0)}
                    {this.func(1)}
                    {this.func(2)}


                </div>
                <div className='board-row'>
                    {this.func(3)}
                    {this.func(4)}
                    {this.func(6)}

                </div>
                <div className='board-row'>
                    {this.func(6)}
                    {this.func(7)}
                    {this.func(8)}

                </div>
            </div>
        );
    }
}


class Game extends React.Component {
    render() {
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board/>
                </div>
                <div className='game-info'>
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
