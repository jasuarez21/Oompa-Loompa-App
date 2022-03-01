import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadOompas } from '../../redux/actions/actionCreators';

const ListOfOompas = () => {
    const oompas = useSelector((store) => store.oompas);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadOompas());
    }, []);
  return (
      <>
        {console.log(oompas)} 
        <p>La lista de los oompas</p>
        <Link to="/:id">Detail</Link>
      </>
  )
}

export default ListOfOompas;