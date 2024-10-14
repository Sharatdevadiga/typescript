import type Item from "../../models/Item";

interface ShoppingListProps {
  items: Item[];
}

export default function ShopppingList({
  items,
}: ShoppingListProps): JSX.Element {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{`${item.product} - ${item.quantity}`}</li>
        ))}
      </ul>
    </div>
  );
}
