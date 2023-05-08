import "./Category.css";
const Category = (props) => {
  return (
    <div className="product-category">
      <div className="widget-container">
        {props.categories?.map((category) => (
          <>
            <div className="swiper-slide">
              <a href="/" className="thumbnail">
                <img
                  loading="lazy"
                  alt="Tee"
                  src="https://3bich.vn/wp-content/uploads/2023/02/z4124356917940_72ab4867fdb4470209bc059cde93a70f.jpg"
                  className="webpexpress-processed"
                  height="200px"
                />
              </a>
              <h4 className="slide-title">
                <a href="/">{category.name}</a>
              </h4>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default Category;
