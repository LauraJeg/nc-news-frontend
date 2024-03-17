function Error ({statuscode, msg}) {
    return <p>{`${statuscode}: ${msg}`}</p>
};
export default Error;