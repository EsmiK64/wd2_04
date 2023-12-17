import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Breadcrumb, Table, TextInput, Rating } from "flowbite-react";
import productsData from "../data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id, 10);

    const selectedProduct = productsData.find((prod) => prod.id === productId);

    if (selectedProduct) {
      setProduct(selectedProduct);
    } else {
      console.error(`Product with ID ${productId} not found.`);
    }
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  if (!product || !product.parameters) {
    return <p>Loading...</p>;
  }

  const { parameters } = product;

  return (
    <div>
      <div className="flex mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-5 w-full mb-5 flex-row items-center gap-5 justify-between">
        <Breadcrumb>
          <Breadcrumb.Item href="/" icon={HiHome}>
            Domů
          </Breadcrumb.Item>
          <Breadcrumb.Item href={"/product/" + product.id}>
            {product.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-row w-1/4 justify-end items-center gap-5">
          <TextInput id="search" type="text" placeholder="Hledej..." />
          <div className="h-full">
            <Link to={`/cart`}>
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                className="hover:stroke-blue-500"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          {product.name}
        </span>
        <div className="flex flex-row justify-center gap-5">
          <div>
            <div className="flex w-full justify-center">
              <img
                className="object-cover object-center h-64"
                src={`../images/product${product.id}.jpg`}
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex flex-col justify-end w-1/2">
            <p className="text-5xl font-bold justify-self-start">
              {product.price} Kč
            </p>
            {/*<p>{product.category}</p>*/}
            <p>{product.short_description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded justify-self-end"
            >
              Přidat do košíku
            </button>
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-center">
          <p>{product.long_description}</p>
          <span className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Parametry
          </span>
          <Table className="w-full">
            <Table.Head>
              <Table.HeadCell>Název</Table.HeadCell>
              <Table.HeadCell>Hodnota</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {Object.entries(parameters).map(([name, value]) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={name}
                >
                  <Table.Cell className="font-bold">{name}</Table.Cell>
                  <Table.Cell>{value}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4 z 5
            </p>
          </Rating>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
