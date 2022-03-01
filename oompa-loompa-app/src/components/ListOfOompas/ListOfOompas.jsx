import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOompas } from '../../redux/actions/actionCreators';
import { OompaTarget } from '../OompaTarget/OompaTarget';
import './ListOfOompas.css'

const ListOfOompas = () => {
    const oompas = useSelector((store) => store.oompas);
    const dispatch = useDispatch();
    const [searchOompa, setSearchOompa] = useState('');
    let arrayOfOompas = oompas?.results;
    useEffect(() => {
      dispatch(loadOompas());
    }, []);
  return (
      <section className="body-container">
        <div className="body-container__input-container">
            <input type="text" className="body-container__input-container--input" name="" id="" placeholder="Search"  onChange={e => setSearchOompa(e.target.value)} />
            <button className="body-container__input-container--button">
                <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png" alt="Search oompa" className="body-container__input-container--logo" />
            </button>
        </div>
        <div className="body-container__info-text">
            <h2>Find your Oompa-Loompa</h2>
            <p>There are more than 100K</p>
        </div>
        <div className="body-container__oompas-list-container">
            {   
                arrayOfOompas = oompas?.results?.filter(
                    (oompa) => 
                        oompa.first_name.toLowerCase().includes(searchOompa.toLowerCase()) ||
                        oompa.last_name.toLowerCase().includes(searchOompa.toLowerCase()) ||
                        oompa.profession.toLowerCase().includes(searchOompa.toLowerCase())
                ),
                arrayOfOompas?.map((oompa) => <OompaTarget oompa={oompa} key={`${oompa.id}`} />) 
            } 
        </div>
      </section>
  )
}

export default ListOfOompas;