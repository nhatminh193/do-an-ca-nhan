import { Route } from 'react-router-dom';
import Header from '../Header'

import 'antd/dist/antd.css';

function DefaultLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  console.log("🚀 ~ file: index.jsx ~ line 8 ~ DefaultLayout ~  props",  props)
  
  return (
    <Route
      exact={exact}
      path={path} // /aubuot
      render={(routeProps) => {
        return (
          <>
            <Header/>
            <Component {...other} {...routeProps} />
            FOOTER
          </>
        )
       
       
      }}
    />
  );
}

export default DefaultLayout;
