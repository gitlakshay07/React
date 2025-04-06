import React from 'react'
import useFetch from '../hooks/useFetch'

const Fetch = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  return (
    <div>
        {data && data.map((item) => (
             <ul key={Math.random()}>
                 <li>{item.title}</li>
            </ul>
        )
        )}
    </div>
  )
}

export default Fetch