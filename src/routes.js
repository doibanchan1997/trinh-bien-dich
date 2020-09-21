import React from 'react';
import News from './containers/News/News';

const routes = [
    {
        path: '/quan-ly-bai-viet',
        exact: true,
        main: ()=><News/>
    }
]
export default routes;