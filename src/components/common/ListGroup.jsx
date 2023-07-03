const ListGroup = ({ items, selectedItem, targetName, targetValue }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[targetValue]}
          className={
            selectedItem === item ? "list-group-item active" : "list-group-item"
          }
          onClick={() => {
            console.log(item);
          }}
        >
          {item[targetName]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
