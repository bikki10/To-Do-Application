//rfce for boiler plate

// function Example() {
//   const shoot = (a) => {
//     alert(a);
//   };
//   return (
//     <>
//       <button onClick={() => shoot("Goal!!!!!!")}>Take the shot!</button>
//     </>
//   );
// }

// export default Example;

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// function MadeGoal() {
//   return <h1>Goal!!</h1>;
// }
// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// export default Goal;

// Logical && operator

function Car(props) {
  const cars = ["a", "b", "c"];
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

export default Car;

//  Ternary Operator

// function Goal(props) {
//   const isGoal = props.isGoal;
//   return( <>
//     {isGoal?<MadeGoal/>: <MissedGoal/>}
//   </>
//   );
// };

// function MadeGoal() {
//   return <h1>Goal!!</h1>;
// }
// function MissedGoal() {
//   return <h1>MISSED!</h1>;
// }

// export default Goal

// List

// function Garage() {
//   const cars = ["Ford", "Audi", " Toyota"];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {cars.map((car) => {
//           return <Car brand={car} />;
//         })}
//       </ul>
//     </>
//   );
// }

// function Car(props) {
//   return <li>I am a {props.brand}</li>;
// }

// export default Garage;
