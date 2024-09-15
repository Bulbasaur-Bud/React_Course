// function Button() {
//   const styles = {
//     backgroundColor: "hsl(200, 100%, 50%)",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer",
//   };
//   return <button style={styles}>Click Me</button>;
// }

// export default Button;

function Button() {
  const handleClick = () => console.log("Ouch!");
  const handleClick2 = (name) => console.log(`${name} stop cliking me!`);
  return <button onClick={() => handleClick2("Praphan")}>Click Me 😃</button>;
}

export default Button;
