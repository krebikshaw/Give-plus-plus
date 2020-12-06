import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const Icon = styled.i`
  background: url(${process.env.PUBLIC_URL}/svg/${(props) => props.kind}.svg)
    center/cover no-repeat;
  margin: 8px ${(props) => (props.$margin === 0 ? 0 : 11)}px;
`;

export default function IconComponent({ kind, margin }) {
  return (
    <IconContainer>
      <Icon kind={kind} $margin={margin} />
    </IconContainer>
  );
}
