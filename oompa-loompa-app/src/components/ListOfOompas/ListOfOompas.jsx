import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOompas } from '../../redux/actions/actionCreators';
import { OompaTarget } from '../OompaTarget/OompaTarget';
import './ListOfOompas.css'

const ListOfOompas = () => {
    const oompas = useSelector((store) => store.oompas);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadOompas());
    }, []);
  return (
      <section>
        <input type="text" name="" id="" />
        <div className="oompas-list-container">
            { oompas?.results?.map((oompa) => <OompaTarget oompa={oompa} />) } 
        </div>
      </section>
  )
}

export default ListOfOompas;