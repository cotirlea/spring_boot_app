import React,{useEffect,useState} from 'react';
import './Home.css';
import './Proba.css';
import {getProba,addProba,removeProba} from './rest_opp';


export default function Home() {

    function Proba({id,nume,min,max,participanti}){
         return (
                <div className='proba'>
                    <p className="proba_text">{id}</p>
                    <p className="proba_text">{nume}</p>
                    <p className="proba_text">{min}</p>
                    <p className="proba_text">{max}</p>
                    <ul>
                            {participanti.map((participant) => <p className="proba_text">{participant}</p>)}
                    </ul>
                </div>
        );

    }

    const [data,setData] = useState([{id:"1",nume:"x",min:"12",max:"16",participanti:['1']},{id:"2",nume:"y",min:"14",max:"17",participanti:['2']},{id:"3",nume:"z",min:"15",max:"18",participanti:['3']}])
    const [{proba},setProba] = useState('')
    const [{participant},setParticipant] = useState('')
    

     useEffect(() => {
            
         getProba().then(function(result){ 
            setData( arr => [ ...result]);
        })
    }, []);


   
    const add = () =>{
        let empty = []
        setData(arr => [...empty])
        addProba(proba,participant)
        getProba().then(function(result){ 
            setData( arr => [ ...result]);
        })
    }

    const remove = () =>{
        let empty = []
        setData(arr => [...empty])
        removeProba(proba,participant)
        getProba().then(function(result){ 
            setData( arr => [ ...result]);
        })
    }

     const partHandler = e => {
        setParticipant({
            participant:e.target.value
        })
    }
     const probaHandler = e => {
        setProba({
            proba:e.target.value
        })
    }
   
    
  return (
      <div className='home'>
            <h1 className='primary'>Home</h1>
            <input placeholder='nume proba' onChange={probaHandler}/>
            <input placeholder='nume participant' onChange={partHandler} />
            <button className='home_button' onClick={add}>Add</button>
            <button className='home_button' onClick={remove}>Remove</button>
            {data.map(item => (
                <Proba
                    id={item.id}
                    nume={item.nume}
                    min={item.min}
                    max={item.max}
                    participanti={item.participanti}
                    />
            ))}
        
      </div>
  )
}
