import PropTypes from "prop-types";

function List(props) {
  // const fruits = [
  //   { id: 1, name: "apple", cal: 95 },
  //   { id: 2, name: "orange", cal: 45 },
  //   { id: 3, name: "banana", cal: 105 },
  //   { id: 4, name: "coconut", cal: 159 },
  //   { id: 5, name: "pineapple", cal: 37 },
  // ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
  // fruits.sort((a, b) => a.cal - b.cal); //Numerical order
  // fruits.sort((a, b) => b.cal - a.cal); //Decending

  // const lowCalFruits = fruits.filter((fruit) => fruit.cal < 100);

  // const highCalFruits = fruits.filter((fruit) => fruit.cal > 100);

  // const listItems = highCalFruits.map((highCalFruit) => (
  //   <li key={highCalFruit.name}>
  //     {highCalFruit.name}: &nbsp; <b> {highCalFruit.cal}</b>
  //   </li>
  // ));

  //This will be using the props method. Hence we transferred all the info to App.jsx

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b> {item.cal}</b>
    </li>
  ));
  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listItems}</ol>
    </div>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      cal: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
