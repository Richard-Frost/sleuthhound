import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import UserFormHooks from './UserFormHooks'
import ProspectContainer from './ProspectContainer'
import AgencyContainer from './AgencyContainer';
import Welcome from './Welcome'
import About from './About'


const Router = () => {
    return (
       <Routes>
           <Route exact path='/home' element={<Home />} />
           <Route exact path='/pets' element={<Home />} />
           <Route exact path='/prospectform' element={<ProspectContainer />} />
           <Route exact path='/signup' element={<UserFormHooks />} />
           <Route exact path='/agency' element={<AgencyContainer />} />
           <Route exact path='/' element={<Welcome />} />
           <Route exact path='/about' element={<About />} />
       </Routes>
    );
};

export default Router;