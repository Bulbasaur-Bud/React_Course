import Card from "./Card";
import Button from "./Button";
import Student from "./Student";

function App() {
  return (
    <div>
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Mary" age={12} isStudent={true} />
      <Student />
      <Student name="Larry" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
