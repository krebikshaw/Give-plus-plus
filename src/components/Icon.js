import styled from 'styled-components';

const IconContainer = styled.a`
  display: flex;
`;

const Icon = styled.i`
  background: url(${process.env.PUBLIC_URL}/svg/${(props) => props.kind}.svg)
    center/cover no-repeat;
`;

export default function IconComponent({ kind }) {
  return (
    <IconContainer>
      <Icon kind={kind} />
    </IconContainer>
  );
}
