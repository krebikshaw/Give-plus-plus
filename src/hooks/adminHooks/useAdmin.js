import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  selectUsers,
  selectProducts,
  selectCount,
  selectMails,
  selectMail,
  getUnCheckProducts,
  updateProductStatus,
  getUsers,
  searchUsers,
  getProducts,
  searchProducts,
  getMails,
} from '../../redux/slices/adminSlice/adminSlice';

export default function useAdmin() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const products = useSelector(selectProducts);
  const count = useSelector(selectCount);
  const mails = useSelector(selectMails);
  const mail = useSelector(selectMail);
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [params, setParams] = useState({
    sort: 'createdAt',
    order: 'DESC',
  });
  const [productParams, setProductParams] = useState({
    status: 'all',
    sort: 'createdAt',
    order: 'DESC',
  });

  const handleGetUnCheckProducts = (page) =>
    dispatch(getUnCheckProducts(page)).then((result) => result);
  const handleUpdateProductStatus = (id, status) =>
    dispatch(updateProductStatus(id, status)).then((result) => result);
  const handleGetUsers = (params) =>
    dispatch(getUsers(params)).then((result) => result);
  const handleSearchUsers = (keyword) =>
    dispatch(searchUsers(keyword)).then((result) => result);
  const handleGetProducts = (params) =>
    dispatch(getProducts(params)).then((result) => result);
  const handleSearchProducts = (params) =>
    dispatch(searchProducts(params)).then((result) => result);
  const handleGetMails = () => dispatch(getMails()).then((result) => result);

  const handleChangeSelector = (e, product) => {
    setValue(e.target.value);
    setIsChecked(true);
    const status = e.target.value === '通過' ? '1' : '2';
    handleUpdateProductStatus(product.id, status);
  };

  const handleSearchingUsers = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setParams({
      ...params,
      keyword: value ? value : keyword,
    });
    handleSearchUsers({
      ...params,
      keyword: value ? value : keyword,
    });
  };

  const handleSearchingProducts = (value) => {
    setKeyword(value);
    setIsSearch(true);
    setProductParams({
      ...productParams,
      keyword: value ? value : keyword,
    });
    handleSearchProducts({
      ...productParams,
      keyword: value ? value : keyword,
    });
  };

  const formatter = new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    minimumFractionDigits: 0,
  });

  const setThousandths = (price) => formatter.format(price);

  return {
    users,
    products,
    count,
    mail,
    mails,
    value,
    keyword,
    params,
    productParams,
    isChecked,
    isSearch,
    setProductParams,
    setThousandths,
    setValue,
    setIsChecked,
    setIsChecked,
    setKeyword,
    setParams,
    handleGetUnCheckProducts,
    handleUpdateProductStatus,
    handleGetUsers,
    handleSearchUsers,
    handleGetProducts,
    handleSearchProducts,
    handleGetMails,
    handleChangeSelector,
    handleSearchingUsers,
    handleSearchingProducts,
  };
}
