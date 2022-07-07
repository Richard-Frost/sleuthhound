 import React from 'react';

 import PetsContainer from './PetsContainer'
 import Router from './Router'
 import Header from './Header'
 import Home from './Home'
 
 const App = () => {
     return (
         <div id="main">
             <Header />
             <Router />
         </div>
     );
 };

 export default App;