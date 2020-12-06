import { useSelector, useDispatch } from 'react-redux';

export default function useManage() {
  const dispatch = useDispatch();

  return { manage };
}
