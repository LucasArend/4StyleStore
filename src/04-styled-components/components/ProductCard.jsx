import styled from "styled-components";

const Card = styled.div`
  background: #e5e7eb;
  border: 1px solid #9ca3af;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  transition: 0.3s;

  &:hover {
    background: #d1d5db;
  }
`;

export default function ProductCard({ name, price }) {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{price}</p>
    </Card>
  );
}
