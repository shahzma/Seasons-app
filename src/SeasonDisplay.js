import './SeasonDisplay.css';
import React from 'react';
const seasonConfig={
    summer: {
        text:'lets hit the beach',
        iconName:'sun'
    },
    winter: {
        text:'Burr its cold!',
        iconName:'snowflake'
    }
};

const getSeason=(lat,month)=>{
    if (month>2 && month<9){
        return lat>0 ? 'summer':'winter';
    }
    else {
        return lat>0 ?'winter':'summer';
    }    
}
const SeasonDisplay=(props)=>{
    const season =getSeason(props.lat,new Date().getMonth());
    //wiil return object with text and iconName inside 
    const {text,iconName}=seasonConfig[season];
    /*console.log(props.lat);Note tha twe use{} to refrence js variable and also any js expression*/
    return (//<i> tag is used in semantic ui for icons like <i classs=''></i> and the expresion after it is for template literals viz string text ${expresiion}string text 
    <div className = {`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`}/>
        <h1> {text}</h1>
    <i className={`icon-right massive ${iconName} icon`}/>    
    </div>)

};

export default SeasonDisplay;