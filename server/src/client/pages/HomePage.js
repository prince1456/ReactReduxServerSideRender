import React from 'react';

const HomePage = ()=>{
    return (
    <div className="container">
    <div className="center-align" style={{marginTop:'200px'}}>
        <h1> I'm the home component</h1>
         <button onClick={()=> console.log('hi there')}> Press! </button>
    </div>
    </div>
    
);
};

export default 
{
    component:HomePage
};