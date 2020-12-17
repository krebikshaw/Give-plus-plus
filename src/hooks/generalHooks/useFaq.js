import { useSelector, useDispatch } from 'react-redux';
import {
  selectFaqs,
  getFaqs,
} from '../../redux/slices/generalSlice/generalSlice';

export default function useFaq() {
  const dispatch = useDispatch();
  const faqs = useSelector(selectFaqs);
  const handleGetFaqs = () => dispatch(getFaqs());
  return { faqs, handleGetFaqs };
}
