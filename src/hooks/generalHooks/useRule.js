import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentRule } from '../../redux/slices/generalSlice/generalSlice';

export default function useRule() {
  const rule1 = useRef();
  const rule2 = useRef();
  const rule3 = useRef();
  const currentRule = useSelector(selectCurrentRule);
  return { rule1, rule2, rule3, currentRule };
}
