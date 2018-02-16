import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';


export default [
    {
        ...App,
        routes: [
            {
                //HomePage = { loadData, component: HomePage}
                ...HomePage,
                path:'/',
                exact:true
            },
            {
                ...UsersListPage,
                path:'/users',
            },
            {
                ...AdminsListPage,
                path:'/admins',
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
/**
 * import {Route} from 'react-router-dom';
export default () => {
    return ( <div> 
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList} />
    </div>);
};
 */

