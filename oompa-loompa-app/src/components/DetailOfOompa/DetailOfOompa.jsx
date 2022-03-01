import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadOompasDetail } from '../../redux/actions/actionCreators'
import './DetailOfOompa.css'

const DetailOfOompa = () => {
  const oompa = useSelector((store) => store.oompas);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(loadOompasDetail(id));
  }, []);
  return (
    <section className="oompa-detail-container">
       <img src={`${oompa.image}`} alt={`${oompa.first_name} ${oompa.last_name}`} className='oompa-detail-container__image' />
       <div className='oompa-detail-info'>
          <h3>{oompa.first_name} {oompa.last_name}</h3>
          <p className='oompa-detail-info__subinfo'>{oompa.gender === 'M' ? 'Man' : 'Women'}</p>
          <p className='oompa-detail-info__subinfo'>{oompa.profession}</p>
          <p>{oompa.quota}</p>
       </div>
    </section>
  )
}

export default DetailOfOompa;
