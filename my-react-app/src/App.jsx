import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import MyComponent from "./MyComponent";
import Counter from "./Counter";

function App() {
  const fruits = [
    { id: 1, name: "apple", cal: 95 },
    { id: 2, name: "orange", cal: 45 },
    { id: 3, name: "banana", cal: 105 },
    { id: 4, name: "coconut", cal: 159 },
    { id: 5, name: "pineapple", cal: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatos", cal: 95 },
    { id: 7, name: "celery", cal: 45 },
    { id: 8, name: "carrots", cal: 105 },
    { id: 9, name: "corn", cal: 159 },
    { id: 10, name: "brocolli", cal: 37 },
  ];

  return (
    <div>
      <Card />
      <Counter />
      <br />
      <MyComponent />
      <br />
      <Button />

      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}

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
    </div>
  );
}

export default App;
