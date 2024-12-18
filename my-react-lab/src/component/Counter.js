import react , {usestate} from 'react';

function counter(){
    const [count ,setcount]= usestate(0);
    
    const increment = () =>{
        setcount(count + 1);
    }

    const decrement = () =>{
        setcount(count - 1);
    }


    return (
        <div>
            <h1>count:{count}</h1>
            <button onclick={increment}>increase</button>
            <button onclick={decrement}>decrease</button>


        </div>
    );
}


export default counter