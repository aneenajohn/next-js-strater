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
        <>
            {
                data ? (
                    <>
                        <p>Title: {data.title}</p>
                        <br/>
                        <p>Description: {data.body}</p>
                        <br/>
                    </>
                ) : <p>Loading...</p>
            }
        </>
    )
}
export default CSR;