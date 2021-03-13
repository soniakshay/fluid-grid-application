
import React,{Component} from "react";
import './App.css';




class  App extends Component   {
    state  = {
        numberOfColumns: 1,
        boxes:0,
        number:[]
    }


     renderOptions = () => {
        let options=[];
        for(let i =1; i<=10; i++){
            options.push(<option value={i}>{i}</option>);
        }
        return options;
    }

    setBoxes = (i) => {
        const number = this.state.number;
        number.splice(i,1);
        this.setState({boxes:(this.state.boxes - 1),number: [...number]});
    }
     renderBoxes = () =>{
        let box=[];
        for (let i=0; i< this.state.boxes ; i++){
            box.push(
                <div className='customBox' >
                    <button className="closeButton" onClick={()=>this.setBoxes(i)}>x</button>
                    <span>{this.state.number[i]}</span>

                </div>);
        }
        return box;
    }


    addBox = () => {
        this.setState({boxes: (this.state.boxes + 1)});
    }
    range = (val) => {
            const range =  [];
        for(let i=1; i <= val;i++){
                range.push(i);
             }
        console.log(range);
        return range;
    }
    setvalueOfCol = (val) => {
        console.log(val);
        this.setState({numberOfColumns:parseInt(val),number:[...this.range(10)]});
    }

    render() {
return (
    <div className="App">
        <header>
            <select onChange={ (e) =>this.setvalueOfCol(e.target.value)}>
                {this.renderOptions()}
            </select>
            {/* <button onClick={()=>createGrid()}>Create Grid</button> */}
            <button onClick={()=>this.addBox()}>Add Box</button>
        </header>
        <div style={{display:"grid",gridTemplateColumns:`repeat(${this.state.numberOfColumns}, 1fr)`, height:'100px'}}>
            {this.renderBoxes()}
        </div>
    </div>
)
    }
}
export default App;
