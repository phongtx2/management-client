import { Layout, Card, Row, Col, Spin, Pagination } from "antd";
import { getCategories, getProducts } from "../api/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Header } from "../components/Header";
import Category from "../components/Category";
import sp from "../assets/sp.png";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      setCategories(data.categories);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    getProducts(page, filter)
      .then(({ data }) => {
        setProducts(data.products);
        setTotalPages(data.total);
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page]);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <Spin size="large" />;
      </div>
    );

  return (
    <>
      <Header />
      <Layout>
        <Layout.Content
          style={{
            marginTop: "6rem",
            background: "rgba(168,35,18,1)",
          }}>
          <Category categories={categories} setFilter={setFilter} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}>
            <img src={sp} alt="logo" height="100px" />
          </div>
          <Row gutter={[24, 24]} style={{ padding: "1rem" }}>
            {products.map((product) => (
              <Col
                span={6}
                style={{ justifyContent: "center", display: "flex" }}
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}>
                <Card
                  style={{
                    height: "85%",
                    width: "85%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  hoverable
                  cover={
                    <div
                      style={{
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                      }}>
                      <img
                        style={{ width: "300px", height: "455px" }}
                        alt="product"
                        src={product.image}
                      />
                    </div>
                  }>
                  <Card.Meta
                    style={{ position: "relative", bottom: 0 }}
                    title={product.name}
                    description={product.Category.name}
                  />
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination
            current={page}
            total={totalPages * 5}
            onChange={setPage}
          />
        </Layout.Content>
      </Layout>
    </>
  );
};
