import React from 'react';
import Home from './containers/Home/Home';

const routes = [
    {
        path: '/quan-ly-bai-viet',
        exact: true,
        main: ()=><Home/>
    }
]
export default routes;