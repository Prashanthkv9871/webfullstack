import CompB from "./CompB";
function CompA() {
  var product_Name = "Iphone 12";
  var color = ["Red", "Gray", "White"];
  return (
    <>
      <h1>Component A</h1>
      <hr />
      <CompB one={product_Name} two={color} />
    </>
  );
}

export default CompA;
