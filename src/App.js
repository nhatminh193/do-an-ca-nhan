import Router from './Router';
import 'antd/dist/antd.css';

function App() {
  const productList = [
    {
      id: 1,
      name: "iphone 12"
    },
    {
      id: 2,
      name: "samsung note 20"
    }
  ];

  return (
    <div>
      <Router productList={productList} />
    </div>
  );
}

export default App;
