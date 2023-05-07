import { Layout, Typography, Card, Row, Col, Spin, Input, Button } from "antd";
import { getBooks } from "../api/book";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagingState, setPagingState] = useState({
    currentPage: 1,
    pageSize: 8,
    total: 0,
  });
  const [filter, setFilter] = useState("");

  const onFilter = (book) =>
    book.name.includes(filter) ||
    book.Category.name.includes(filter) ||
    !filter;

  useEffect(() => {
    setLoading(true);
    getBooks(pagingState)
      .then(({ data }) => {
        setBooks(data.books);
        setPagingState((prev) => ({
          ...prev,
          currentPage: Number(data.currentPage),
          total: data.total,
        }));
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagingState.currentPage]);

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
    <Layout>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "rgba(255,176,81,1)",
          display: "flex",
          alignItems: "center",
        }}>
        <Typography.Title level={3}>3 Bick Fake</Typography.Title>
      </Layout.Header>

      <Layout.Content
        style={{ marginTop: "4rem", background: "rgba(168,35,18,1)" }}>
        <Row gutter={[24, 24]} style={{ padding: "1rem" }}>
          <Col span={24} style={{ margin: "1rem 0" }}>
            <Input
              placeholder="Filter"
              onChange={(e) => setFilter(e.target.value)}
            />
          </Col>
          {books.filter(onFilter).map((book) => (
            <Col
              span={6}
              key={book.id}
              onClick={() => navigate(`/book/${book.id}`)}>
              <Card
                style={{
                  height: "100%",
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
                      style={{ width: "100%" }}
                      alt="example"
                      src={book.image}
                    />
                    {/* <Button className="hover-button">Click me</Button> */}
                  </div>
                }>
                <Card.Meta
                  style={{ position: "relative", bottom: 0 }}
                  title={book.name}
                  description={book.Category.name}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  );
};
