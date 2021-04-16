import { Header } from 'antd/lib/layout/layout';
import { Route } from 'react-router-dom';

function DefaultLayout(props) {
  const { exact, path, component: Component, ...other } = props;
  console.log("🚀 ~ file: index.jsx ~ line 6 ~ DefaultLayout ~ props", props)
  return (
    <Route
      exact={exact}
      path={path}
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
