import styled from "@emotion/styled";

export const ProductDetailsContainer = styled.div`
  width: 100%;
`;

export const ProductDetailsImage = styled.img`
  display: block;
  width: 570px;
  height: 570px;
  object-fit: contain;
  margin: auto;
  @media screen and (max-width: 850px) {
    width: 350px;
    height: 350px;
  }
`;

export const ProductDetailsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.25em;
  letter-spacing: 0.5px;
  text-align: left;
  border-bottom: 4px solid #aaaaaa;
  padding: 1.5em;
  @media screen and (max-width: 850px) {
    font-size: 1.5rem;
    padding: 1em;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2rem;
    color: #333;
    padding: 1.5em;
  }
  @media screen and (max-width: 850px) {
    p {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`;

export const ShoppingCartButton = styled.button`
  width: 100%;
  height: 100px;
  border: none;
  background-color: #73675c;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  &:hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 850px) {
    font-size: 1rem;
    height: 40px;
  }
`;