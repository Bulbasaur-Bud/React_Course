import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <div>
      <Card />
      <Button />
      <UserGreeting isLoggedIn={true} username="Praphan" />
      <UserGreeting isLoggedIn={false} username="Praphan" />
      <UserGreeting isLoggedIn={false} />
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
