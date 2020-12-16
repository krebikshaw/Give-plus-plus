import { useSelector, useDispatch } from "react-redux";
import {
  selectVendorInfo,
  selectErrorMessage,
  getVendorInfo,
} from "../../redux/slices/userSlice/userSlice";

export default function useUser() {
  const dispatch = useDispatch();
  //const user = useSelector(selectUser);
  const vendorInfo = useSelector(selectVendorInfo);
  const userErrorMessage = useSelector(selectErrorMessage);
  const handleGetVendorInfo = (id) => {
    dispatch(getVendorInfo(id));
  };

  return { vendorInfo, userErrorMessage, handleGetVendorInfo };
}
