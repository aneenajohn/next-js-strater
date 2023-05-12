// import axios from 'axios';
const SSR = ({ data }) => {
    console.log(data);
    return (
        <div>
            <p>{data.title}</p>
            <br/>
            <p>{data.description}</p>
        </div>
        // <div>Hey {person}, Welcome to the party!</div>
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
