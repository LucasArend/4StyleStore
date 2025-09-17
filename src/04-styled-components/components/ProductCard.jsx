import styled from "styled-components";

// Café escuro e latte
const Card = styled.div`
  background: ${(props) => (props.isDarkMode ? "#3B261C" : "white")};
  color: ${(props) => (props.isDarkMode ? "#f3e8e3" : "#1f2937")};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: #d6a675; // caramelo
  }

  ${(props) =>
    props.inCart &&
    `
    border-color: #B8563A;
    background-color: ${props.isDarkMode ? "#5a372d" : "#fff0ec"};
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => (props.isDarkMode ? "#f3e8e3" : "#1f2937")};
  margin-bottom: 8px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  max-width: 220px;
  padding: 10px;
  background-color: ${(props) =>
    props.inCart
      ? "#B8563A"
      : props.isDarkMode
      ? "#A9745B"
      : "#4f46e5"};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  white-space: nowrap;
  min-height: 38px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;

  &:hover {
    background-color: ${(props) =>
      props.inCart
        ? "#993924"
        : props.isDarkMode
        ? "#8B5E46"
        : "#4338ca"};
  }
`;

function ProductCard({ title, image, preco, inCart, onToggleCart, isDarkMode }) {
  return (
    <Card inCart={inCart} isDarkMode={isDarkMode} onClick={onToggleCart}>
      <Image src={image} alt={title} />
      <Title isDarkMode={isDarkMode}>{title}</Title>
      <Title isDarkMode={isDarkMode}>{preco}</Title>
      <Button inCart={inCart} isDarkMode={isDarkMode}>
        {inCart ? "Remover do Carrinho" : "Adicionar ao Carrinho"}
      </Button>
    </Card>
  );
}

export default ProductCard;
