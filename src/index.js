import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner';
class App extends React.Component{
    //another function we can define inside our class based components .itis a special function with a special namebut this other function is not required by react and belongs to js
   /* constructor(props){//constructor function called when instance of class App is created hence good for state ini
        super(props);//ceremonial step state is ini in next state
        this.state={lat:null , errorMessage:''};/*state object and all its properties can be refrencedfrom any function inside app component 
    we somehow have to update lat prop in state object.If we update state  component wil render itself instantly*/
    

    state={lat:null,errorMessage:''};
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{
              //the only time we set state = something is at ini      

                this.setState({lat:position.coords.latitude});
            }  , 
            err =>{ 
                this.setState({errorMessage:err.message});
            }//function(position){console.log(position)}, this is a argument function (err){console.log(err)};
        ) 
    }
    componentDidUpdate(){
        console.log('my componenetw was rerendered');
    }


    renderContent(){//react says we have to define render.Never make a call from render
        /*window.navigator.geolocation.getCurrentPosition(
            position=>console.log(position) , 
            err =>console.log(err)//function(position){console.log(position)}, this is a argument function (err){console.log(err)};
        );*/
        if (this.state.errorMessage && !this.state.lat){
            return(<div>Error:{this.state.errorMessage}</div>)
        }
        if (!this.state.errorMessage && this.state.lat){
             return <SeasonDisplay lat ={this.state.lat}/>/*(<div>Latitude:{this.state.lat}</div>).Here we are taking a property from state
             of app component and passing it as prop to the child.Confusion point.any time we call set state component updates itselfthat is
             going to cause seasonDisplay to be updated as well */


        }
        else{
            return<Spinner message='I am ironman' />;
        }
      
    }

    render() {
        return(
            <div className='border red'>
                {this.renderContent()}
            </div>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);