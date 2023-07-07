const ListGroup = ({
  items,
  selectedItem,
  onItemChange,
  targetName,
  targetValue,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[targetValue]}
          className={
            selectedItem === item
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
          onClick={() => {
            onItemChange(item);
          }}
        >
          {item[targetName]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
