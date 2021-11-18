
import Login from "./components/Login";
import React from 'react';

import Account from "./components/Account";
import {Route,Routes } from "react-router-dom";


function App() {
  return (
<>

<Routes>
<Route path='/' element={<Login/>}>
</Route>
<Route path='/account' element={<Account/>}/>
</Routes>

</>
  );
}

export default App;
