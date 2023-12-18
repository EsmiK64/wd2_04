import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Table, TextInput, Rating, Card, Avatar } from "flowbite-react";
import productsData from "../data/products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(window.localStorage.getItem("cart")));
    console.log(cartItems);
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

  const handleAddToCart = (product) => {
    setCartItems(JSON.parse(window.localStorage.getItem("cart")));
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    console.log(updatedCart);
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (!product.parameters) {
    return (
      <div className="w-full">
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
        <div className="flex flex-col items-center gap-5 w-full">
          <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            {product.name}
          </span>
          <div className="flex flex-row items-center gap-5 w-full">
            <div className="flex w-1/2 justify-end">
              <img
                className="object-cover object-center h-64"
                src={`../images/product${product.id}.jpg`}
                alt={product.name}
              />
            </div>
            <div className="flex flex-col justify-end w-1/2">
              <p className="text-5xl font-bold justify-self-start">
                {product.price} Kč
              </p>
              <p>{product.short_description}</p>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded justify-self-end w-fit mt-5"
              >
                Přidat do košíku
              </button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <p>{product.long_description}</p>
            <div className="w-full">
              <span className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                Hodnocení
              </span>
              <Rating className="my-2">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4 z 5</p>
              </Rating>
              <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">3 hodnocení</p>
              <Rating.Advanced percentFilled={66} className="mb-2">
                5 hvězdiček
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0} className="mb-2">
                4 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={33} className="mb-2">
                3 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0} className="mb-2">
                2 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0}>
                1 hvězdička
              </Rating.Advanced>
            </div>
          </div>
        </div>
      </div>
    );
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
      <div className="w-full flex justify-center">
        <div className="flex flex-col items-center gap-5 w-1/2">
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
            <div className="flex flex-col gap-3 justify-end">
              <p className="text-5xl font-bold justify-self-start">
                {product.price} Kč
              </p>
              <p>{product.short_description}</p>
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded justify-self-end w-fit"
              >
                Přidat do košíku
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p>{product.long_description}</p>
            <span className="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
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
            <div className="w-full mt-4">
              <span className="my-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                Hodnocení
              </span>
              <Rating className="my-2">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4 z 5</p>
              </Rating>
              <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">3 hodnocení</p>
              <Rating.Advanced percentFilled={66} className="mb-2">
                5 hvězdiček
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0} className="mb-2">
                4 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={33} className="mb-2">
                3 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0} className="mb-2">
                2 hvězdičky
              </Rating.Advanced>
              <Rating.Advanced percentFilled={0}>
                1 hvězdička
              </Rating.Advanced>
              <Card className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/6 m-0 p-0 ">
                    <Avatar rounded />
                  </div>
                  <div className="w-5/6 m-0 p-0">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row gap-5 items-center">
                      René Dus
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">5 z 5</p>
                      </Rating>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Mega banger hoši
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/6 m-0 p-0 ">
                    <Avatar rounded />
                  </div>
                  <div className="w-5/6 m-0 p-0">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row gap-5 items-center">
                      František Velebný
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">5 z 5</p>
                      </Rating>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      Vyspinkal jsem se do růžova
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="mt-5">
                <div className="flex flex-row">
                  <div className="w-1/6 m-0 p-0 ">
                    <Avatar rounded />
                  </div>
                  <div className="w-5/6 m-0 p-0">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row gap-5 items-center">
                      František Věcek
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">3 z 5</p>
                      </Rating>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      nemůžu filtrovat :(
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;