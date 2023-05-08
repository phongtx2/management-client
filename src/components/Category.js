import "./Category.css";
const Category = (props) => {
  const handleClick = (a) => {
    props.setFilter(a);
    console.log(a);
  };
  return (
    <div className="product-category">
      <div className="widget-container">
        {props.categories?.map((category) => (
          <>
            <div
              className="swiper-slide"
              onClick={() => handleClick(category.id)}>
              <div className="thumbnail">
                <img height={200} alt="product" src={category.image} />
              </div>
              <h4 className="slide-title">
                <div>{category.name}</div>
              </h4>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Category;
