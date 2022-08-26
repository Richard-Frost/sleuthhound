 import React from 'react';
 import Router from './Router'
 import Header from './Header'
 import Footer from './Footer'
 
 const App = () => {
     return (
        <div id="main">
            <Header />
            <Router />
            <Footer />
        </div>
     );
 };

 export default App;