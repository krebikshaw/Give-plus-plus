import styled from 'styled-components';
import { COLOR, DISTANCE } from '../../constants/style';

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 ${DISTANCE.sm};
  border-radius: 15px;
  border: 1px solid #707070;
  width: ${DISTANCE.lg};
  height: ${DISTANCE.lg};
  cursor: not-allowed;
  background-color: ${(props) => props.$color};
  &:hover {
    filter: grayscale(1);
    border-color: ${COLOR.hover};
    color: ${COLOR.hover};
    transform: scale(1.05);
  }
`;

const Icon = styled.i`
  background: url(${process.env.PUBLIC_URL}/svg/${(props) => props.$kind}.svg)
    center/cover no-repeat;
`;

export default function SocialMediaButton({
  $kind,
  $color,
  handleButtonClick,
}) {
  return (
    <SocialMediaWrapper $color={$color} onClick={handleButtonClick}>
      <Icon $kind={$kind} />
    </SocialMediaWrapper>
  );
}
