import React, {lazy} from 'react';
// const News = React.lazy(()=>import('./containers/News/News'));
// const Form = React.lazy(()=>import('./containers/Form/Form'));
import News from './containers/News/News';
const routes = [
    {
        path: '/quan-ly-bai-viet',
        exact: true,
        main: ()=><News/>
    }
]
export default routes;