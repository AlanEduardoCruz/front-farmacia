
import './Home.css';

function Home() {
    return (
        <>
        <div className=" bg-cyan-600 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindos!</h2>
              <p className='text-xl'>Confira seus produtos aqui!</p>
  
              <div className="flex justify-around gap-4">
              
                {/* <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver jogos</button> */}
              </div>
            </div>
  
            <div className="flex justify-center ">
             
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;