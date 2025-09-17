import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => (props.isDarkMode ? "#1f2937" : "white")}; 
  color: ${(props) => (props.isDarkMode ? "#d1d5db" : "#1f2937")}; 
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: #6366f1; 
  }

  ${(props) =>
    props.inCart &&
    `
    border-color: #10b981; /* emerald-500 */
    background-color: ${props.isDarkMode ? "#064e3b" : "#ecfdf5"};
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
  color: ${(props) => (props.isDarkMode ? "#d1d5db" : "#1f2937")};
  margin-bottom: 8px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  max-width: 220px;
  padding: 10px;
  background-color: ${(props) =>
    props.inCart ? "#dc2626" : props.isDarkMode ? "#4338ca" : "#4f46e5"};
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
      props.inCart ? "#b91c1c" : props.isDarkMode ? "#3730a3" : "#4338ca"};
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
