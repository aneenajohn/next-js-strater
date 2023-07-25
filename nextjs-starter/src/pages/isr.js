
const ISR = ({data}) => {

    return (
        <div className='page'>
            <p>Title: {data?.title}</p>
            <br/>
            <p>Description: {data?.body}</p>
            <br/>
        </div>
    )
}

export default ISR;

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    return {
        props: {
            data
        },
        revalidate: 10
    }
}



