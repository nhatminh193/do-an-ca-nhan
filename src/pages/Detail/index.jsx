import './styles.css';

function DetailPage(props) {
  const { productList, match } = props;
  const id = match.params.id;
  const productDetail = productList.find((item) => item.id.toString() === id);
  return (
    <div>
      <p>Detail</p>
      {productDetail.name}
    </div>
  );
}

export default DetailPage;
