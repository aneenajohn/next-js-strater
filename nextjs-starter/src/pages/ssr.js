// import axios from 'axios';
const SSR = ({ data }) => {
    console.log(data);
    if(!data) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <p>Title: {data.title}</p>
            <br/>
            <p>Description: {data.body}</p>
            <br/>
        </div>
    )
}

export default SSR;


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

// export const getServerSideProps = async () => {
//     // const res = await axios.get('/api/person')
//     fetch('/api/person')
//         .then((res) => )
//     const { person } = res.data;
//     console.log(res.data);
//     return {
//         props: {
//             person
//         }
//     }
// }
