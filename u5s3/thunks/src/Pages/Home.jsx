import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postUser } from '../Redux/auth/action';

function Home() {
    const authSelec = useSelector(store => store.auth);
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();
    
    // const handleClick= () => {useEffect(() => {
    //     dispatch(postUser(text,pass))
    // },[])}

    
    
    

  return (
    <>
        {authSelec.isLoading && <div>...loading</div>}
        {authSelec.isError && <div>Something went wrong!</div>}
        <div>
            <input value={text} type='text' placeholder="Enter Email" onChange={e=> setText(e.target.value)} />
            <input value={pass} type='text' placeholder='Enter Password' onChange={e=> setPass(e.target.value)} />
            <button onClick={()=> {dispatch(postUser(text,pass))}}>Submit</button>
        </div>
    </>
  )
}

export default Home