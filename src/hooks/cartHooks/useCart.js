import { useSelector, useDispatch } from 'react-redux';

export default function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  return { cart };
}
