import React, { useState } from "react";
import styled from "styled-components";
import { EFFECT, COLOR } from "../constants/style";
import { IconComponent } from "../components";
import { InputSearch } from "./Input";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBarContainer = styled.div`
  cursor: pointer;
  display: flex;F
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 32px;
  border-radius: 8px;
  background: ${COLOR.bg_secondary};
  margin-left: 120px;
  box-shadow: ${EFFECT.shadowLight};
  & div {
    display: flex;
    align-items: center;
  }
`;

const SearchArea = styled.div`
  width: 90%;
`;

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleChangeInput = (e) => setValue(e.target.value);
  const handleSearchProduct = (keyWord) => {
    if (location.pathname.includes("search")) {
      navigate(`/products/search/${keyWord}`);
      window.location.reload();
    }
    navigate(`/products/search/${keyWord}`);
    setValue("");
  };

  return (
    <SearchBarContainer>
      <SearchArea>
        <IconComponent kind={"search"} />
        <InputSearch
          value={value}
          onChange={handleChangeInput}
          placeholder='搜尋物品'
          onKeyDown={(e) => {
            if (e.keyCode === 13 && value !== "") {
              handleSearchProduct(value);
            }
          }}
        />
      </SearchArea>
      <IconComponent kind={"angle-down"} />
    </SearchBarContainer>
  );
};

export default SearchBar;
