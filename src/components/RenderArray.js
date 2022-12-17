import Card from "./Card";

function RenderArray(props) {
//   const arrayOfJSX = [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>];

  return (
    <>
    <div className="card-container">
      {/* {arrayOfJSX} */}
      {props.data.map((item, index) => <Card item={item} index={index} key={index}/>)}
      </div>
    </>
  );
}

export default RenderArray;