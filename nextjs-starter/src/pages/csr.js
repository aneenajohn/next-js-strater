import React, { useState, useEffect } from 'react'

const CSR = () => {
    const [data, setData] = useState();
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error)
    },[])

    return (
            <div className='page'>
                <p><b>Title:</b> {data?.title}</p>
                <br/>
                <p><b>Description:</b> {data?.body}</p>
                <br/>
            </div>
    )
}
export default CSR;