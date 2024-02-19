import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBucket } from "@fortawesome/free-solid-svg-icons";
import {
  fetchProductError,
  fetchProductRequest,
  fetchProductSuccess,
} from "../redux/products/action";
import { fetchProducts } from "../api";
import Pagination from "../components/Pagination/Pagination";
import { addToCart } from "../redux/user/action";
import { highestPrice, lowestPrice, priceFormat } from "../utils/helper";
import Filter from "../components/Filter/Filter";
import Loading from "../components/Loading/Loading";

function Home() {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.user.cart);
  const products = useSelector((state) => state.products.products[0]);
  const loading = useSelector((state) => state.products.loading);
  const [currentProducts, setCurrentProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log("currentProducts", currentProducts);
  const numberOfItems = products?.length;
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (Object.keys(user)?.length === 0) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (products && products?.length > 0) {
      setCurrentProducts(products.slice(0, itemsPerPage));
    }
  }, [products]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      dispatch(fetchProductRequest());
      try {
        const productData = await fetchProducts();
        dispatch(fetchProductSuccess(productData));
      } catch (error) {
        dispatch(fetchProductError(error.message));
      }
    };
    fetchProductDetails();
  }, [dispatch]);

  const changePage = (pageNo) => {
    const lastIndex = pageNo * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const newProductList = products.slice(firstIndex, lastIndex);
    setCurrentProducts(newProductList);
    setCurrentPage(pageNo);
  };
  // console.log("cart", cart);
  const handleAddToCart = (product) => {
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, count: 1 }])
    );
    const newProduct = { ...product, count: 1 };
    dispatch(addToCart(newProduct));
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.trim();
    if (e.target.value === "") {
      setCurrentProducts(products.slice(0, itemsPerPage));
    } else {
      const newProductList = products.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setCurrentProducts(newProductList);
    }
  };

  const handleFilter = (filterValue) => {
    const priceFilter = filterValue;
    if (priceFilter === "") {
      setCurrentProducts(products.slice(0, itemsPerPage));
    } else if (priceFilter === "lowest") {
      setCurrentProducts(highestPrice(products));
    } else {
      setCurrentProducts(lowestPrice(products));
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home">
      <div className="product__controller">
        <input
          type="text"
          name="search"
          onChange={handleSearch}
          placeholder="Search..."
          className="product__search"
        />
        <div className="product__filter">
          <Filter handleFilter={handleFilter} />
        </div>
      </div>
      <div className="product__container">
        {currentProducts
          ? currentProducts.map((product) => {
              return (
                <div key={product.id} className="product__card">
                  <img
                    src={product.thumbnail}
                    alt="product"
                    className="product__image"
                  />
                  <div className="product__menu">
                    <div className="product__title">{product.title}</div>
                    <div className="product__price">
                      {" "}
                      $ {priceFormat(product.price)}
                    </div>
                  </div>
                  <div className="product__category">{product.category}</div>
                  <div className="product__menu">
                    <div className="product__rating">
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xl"
                        style={{
                          cursor: "pointer",
                          color: "#ffa41c",
                        }}
                      />{" "}
                      <span> {product.rating}/5</span>
                    </div>
                    <button
                      className="cart__btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faBucket}
                        size="xl"
                        style={{
                          cursor: "pointer",
                        }}
                      />{" "}
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <Pagination
        numberOfItems={numberOfItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
}

export default Home;
