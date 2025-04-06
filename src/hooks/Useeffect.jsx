import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [value, setVale] = useState(0);
    useEffect(() => {
        if(value > 0){
            console.log("useEffect Called");
            document.title = `Inc by ${value}`
        }
    },[value]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json()

            if(data && data.length){
                setData(data);
                setLoading(false);
            }
        }
        getData();
    }, [])
    
    if(loading){
        return <h1>Data is Loading</h1>
    }

  return (
    <div>
       <div>
            <h1>{value}</h1>
            <button onClick={() => setVale(value + 1)}>useEffect</button>
       </div>
       <div>
            {data.map((datas) => (
                <section key={datas.id} >
                    <h1>Title: {datas.title}</h1>
                    <p>Body: {datas.body}</p>
                </section>
            ))}
       </div>
    </div>
  )
}

export default Useeffect;