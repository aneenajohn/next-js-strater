
const SSR = ({ data }) => {
    return (
        <div className='page'>
            <p><b>Title:</b> {data.title}</p>
            <br/>
            <p><b>Description:</b> {data.body}</p>
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
