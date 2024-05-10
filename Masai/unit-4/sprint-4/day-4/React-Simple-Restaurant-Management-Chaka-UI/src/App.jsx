// export default function App() {
//   return <>{/* Add Navbar and AllRoutes components here */}</>;
// }

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={AllRoutes} />
      </Switch>
    </div>
  );
};

export default App;
