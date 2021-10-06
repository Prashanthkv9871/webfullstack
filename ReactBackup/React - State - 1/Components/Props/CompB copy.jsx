function CompB(props) {
  return (
    <>
      <h1>Component B</h1>
      <pre>{JSON.stringify(props)}</pre>
      <h5>Product Name : {props.one}</h5>
      <h6>Default Color: {props.two[1]}</h6>
    </>
  );
}

export default CompB;
