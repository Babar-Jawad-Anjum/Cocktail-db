import CockTailItem from './CockTailItem';
import Loading from './Loading';

export default function CockTails({Data, setCardIdentification}) {

  
  

  return (
    <div className='container'>
      <h1 className='text-center p-2 m-2'>Cocktails</h1>
      <div className="row m-0 p-0">
        {Data.length === 0 ? <Loading /> :  Data.map((data)=>{
          return (<div className='col-md-6 col-lg-4 d-flex justify-content-center my-4' key={data.idDrink}>
            <CockTailItem idDrink={data.idDrink} strDrink={data.strDrink} strGlass={data.strGlass} strAlcoholic={data.strAlcoholic}
            strDrinkThumb={data.strDrinkThumb} setCardIdentification={setCardIdentification}/>
          </div>)
        })}
      </div>
    </div>
  )
}
