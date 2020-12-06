import { useSelector, useDispatch } from 'react-redux';

export default function useUser() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return { user };
}
