import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import PetsForm from './PetsForm'
import UserForm from './UserForm'
import PetsContainer from './PetsContainer'

const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/pets' element={<Home />} />
           <Route exact path='/petsform' element={<PetsContainer />} />
           <Route exact path='/signup' element={<UserForm />} />

       </Routes>
    );
};

export default Router;