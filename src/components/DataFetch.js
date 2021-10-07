import React, { useState, useEffect } from 'react';


function DataFetch(){
    const [ user , setUser ] = useState(null);
    const [ loading , setLoading ] = useState(true);//useState

    const fetchData = async () => {
        const response = await fetch ('https://api.randomuser.me/');
        const data = await response.json();
        const [item] = data.results; 

        //取得データをセット
        setUser(item);
        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return (
        <div>
            {loading ? <h1>loading...</h1> : <h2>{user.name.first} {user.name.last}</h2>}
        </div>
    )
}

export default DataFetch;