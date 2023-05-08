import { useParams } from "react-router-dom";
import { Layout, Typography, Row, Col, Image, Button, Spin } from "antd";
import { getProductById } from "../api/product";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import "./Product.css";

export const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(({ data }) => {
        setProduct(data.product);
      })
      .finally(() => setLoading(false));
  }, [id]);
  console.log(product);
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
      <Header />

      <Layout.Content
        style={{ marginTop: "6rem", background: "rgba(38, 66, 52, 1)" }}>
        <Row>
          <Col
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "30px 0",
            }}>
            <Image src={product.image} height={660} />
          </Col>
          <Col span={12} style={{ padding: "2rem" }}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Typography.Title level={3}>Name</Typography.Title>
                <Typography.Text>{product.name}</Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Title level={3}>Category</Typography.Title>
                <Typography.Paragraph>
                  {product?.Category?.name}
                </Typography.Paragraph>
              </Col>
              <Col span={24}>
                <Typography.Title level={3}>Description</Typography.Title>
                <Typography.Paragraph>
                  {product.description}
                </Typography.Paragraph>
              </Col>
              {/* <Col span={24}>
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  href={product.downloadUrl}>
                  Download Product
                </Button>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
