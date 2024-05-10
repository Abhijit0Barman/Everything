// function AllRoutes() {
//   // import the chakra UI components from the chakra UI library , and remove the following.
//   const Container = ()=><div></div>;

//   return (
//     <Container maxW="container.xl">{/* add all the routes here */}</Container>
//   );
// }

// export default AllRoutes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AddRestaurant from '../pages/AddRestaurant';
import EditRestaurant from '../pages/EditRestaurant';

const AllRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/add-restaurant" component={AddRestaurant} />
      <Route path="/edit-restaurant/:id" component={EditRestaurant} />
    </Switch>
  );
};

export default AllRoutes;
