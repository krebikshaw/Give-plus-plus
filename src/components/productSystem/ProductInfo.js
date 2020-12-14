import { COLOR, FONT, DISTANCE } from "../../constants/style";
import styled from "styled-components";
import { ActionButton } from "../../components/Button";
import { InfoBlock } from "../../components/productSystem";

const ProductName = styled.div`
  width: 500px;
  word-break: break-all;
  font-weight: bold;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const ProductPrice = styled.div`
  margin-top: ${DISTANCE.md};
  font-weight: bold;
  font-size: ${FONT.xs};
  color: ${COLOR.text_1};

  &:before {
    content: "NT$ ";
  }
`;

const ProductQuantityContainer = styled.div`
  margin-top: ${DISTANCE.md};
  margin-bottom: 50px;
  label {
    display: block;
    font-size: ${FONT.xs};
    color: ${COLOR.text_2};
    margin-bottom: ${DISTANCE.sm};
  }
`;

const ProductCountSelect = styled.select`
  line-height: 1.4;
  font-size: 14px;
  color: #39393e;
  padding: 10px 14px 10px 14px;
  background-color: #fff;
  border: none;
  border-right: 14px solid #fff;
  box-shadow: 0 0 0 1px #d3d3d5;
  box-sizing: border-box;
  border-radius: 0;
  padding-right: 34px;
  margin: 1px;
  background-image: url(data:image/svg+xml,%3Csvg width='10' height='6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath class='color' d='M0 0h10L5 6z' fill='%23D3D3D5' fill-rule='evenodd'/%3E%3C/svg%3E%0A);
}
`;

const Options = ({ quantity }) => {
  let options = [];
  for (let i = 1; i <= quantity; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return <>{options}</>;
};

const ProductQuantitySelector = ({ quantity }) => {
  return (
    <ProductQuantityContainer>
      <label>數量</label>
      <ProductCountSelect>
        <Options quantity={quantity} />
      </ProductCountSelect>
    </ProductQuantityContainer>
  );
};

const ShoppingCart = styled(ActionButton)`
  width: 470px;
`;

const RemindBlock = styled(InfoBlock)`
  margin-top: 20px;
  height: 100px;
  width: 500px;
  font-weight: normal;
  font-size: ${FONT.md};
  color: ${COLOR.text_2};
`;

const Remind = () => {
  return (
    <RemindBlock>
      付款後，從備貨到寄出商品為 1 個工作天。（不包含假日）
    </RemindBlock>
  );
};

export const ProductInfo = ({ product }) => {
  return (
    <>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductQuantitySelector quantity={product.quantity} />
      <ShoppingCart $margin={0} $size={"lg"}>
        放 入 購 物 車
      </ShoppingCart>
      <Remind />
    </>
  );
};
