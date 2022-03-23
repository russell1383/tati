import React, { useEffect, useState } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../constants/container";
import {
  SearchBarContainer,
  SearchBarContentWrap,
  SearchBarWrap,
} from "./SearchBar.style";
import { SEARCH_PRODUCTS } from "../../requests/services";
import SearchedProducts from "./SearchedProducts.component";
import loadingImg from "../../assets/icons/loading.gif";

const SearchBar = ({ searchBarState }) => {
  const [searchBarOpen, setSearchBarOpen] = searchBarState;
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [noProducts, setNoProducts] = useState(false);

  let searchBarRef = useClickOutside(() => {
    setSearchBarOpen(false);
  });

  useEffect(() => {
    if (searchTerm) {
      setSearchLoading(true);
      const data = { name: searchTerm };
      SEARCH_PRODUCTS(data).then((response) => {
        if (response.data.length) {
          setSearchResults(response.data);

          setSearchLoading(false);
        } else {
          setNoProducts(true);
          setSearchLoading(false);
        }
      });
    } else {
      setSearchLoading(false);
      setNoProducts(false);
      setSearchResults([]);
    }
  }, [searchTerm]);
  return (
    <>
      <SearchBarWrap searchBarOpen={searchBarOpen}>
        <SearchBarContainer searchBarOpen={searchBarOpen} ref={searchBarRef}>
          <Container>
            <SearchBarContentWrap>
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="icon"
                onClick={() => setSearchBarOpen(false)}
              />
            </SearchBarContentWrap>
            <hr />
          </Container>
          {/* -------Searched Products------- */}
          {searchLoading ? (
            <img src={loadingImg} alt="" className="loading__spinner" />
          ) : searchResults.length ? (
            <SearchedProducts
              searchResults={searchResults}
              setSearchBarOpen={setSearchBarOpen}
            />
          ) : (
            noProducts && <p>No products found</p>
          )}
        </SearchBarContainer>
      </SearchBarWrap>
    </>
  );
};

export default SearchBar;
