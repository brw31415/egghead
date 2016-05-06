import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(){
        super();
        this.state = {red: 0,
            green: 0,
            blue: 0
            
        }
        this.update = this.update.bind(this)
    }
     
    update(e){
      ///  this.setState({txt: e.target.value})
      this.setState({
          txt: e.target.value,
          red: ReactDOM.findDOMNode(this.refs.red).value,
          green: ReactDOM.findDOMNode(this.refs.green).value,
          blue:  ReactDOM.findDOMNode(this.refs.blue).value,
      })
    }
    
    render(){
      //  let txt = this.props.text
    //    return <h1>{txt}</h1>
      return (
          <div>
          
          
        <Widget txt={this.state.txt} update= {this.update}/>
        
         <br />
         <Slider ref="red"  update= {this.update}/>
         {this.state.red}
         <br />
         <Slider ref="green" update= {this.update}/>
        {this.state.green}
         <br />
         <Slider ref="blue" update= {this.update}/>
          {this.state.blue}
          </div>
          )
}
};


 class Slider extends React.Component{
    
    render(){
        
        return (
            
            <input type="range" 
            min="0" 
            max="255" onChange={this.props.update} />
            
            );
            
        
    }
    
}



const Widget = (props) => {
    
    
    
    return(<div>
      <input type="text" onChange={props.update} />
      <h2>{props.txt}</h2></div>)
}



ReactDOM.render(
    
    <App txt = "this is the props value" />,
    document.getElementById('app')
    
    );
    
//const App = () => <div><h1>fuck you</h1><b>BOLD</b></div>

export default App
