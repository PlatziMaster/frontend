import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/User/data.actions';
import getData from '../utils/getData';

export default function useLoadData() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function addData() {
      const userData = await getData();
      dispatch(setUserData(userData));
    }
    addData();
  }, []);
}
