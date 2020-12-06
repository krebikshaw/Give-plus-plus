import { useSelector, useDispatch } from 'react-redux';

export default function useOrder() {
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  return { order };
}
