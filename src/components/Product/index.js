const Product = props => {
  const {
    name,
    category,
    alt,
    photo,
  } = props;

  return (
    <div>
      <h3>{name}</h3>
      <span>{category}</span>
      <img alt={alt} src={photo}/>
    </div>
  );
}

export default Product;
