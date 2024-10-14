import { useState } from "react";
import "./App.css";
import ShopppingList from "./components/ShoppingList";
import type Item from "../models/Item";
import ShoppingListForm from "./components/ShoppingListForm";
import { v4 as getId } from "uuid";

// const num: number = 124;
// console.log("Hello there", num);

// function func<T>(x: T): T {
//   return x;
// }

// const func2 = <T,>(x: T): T => {
//   return x;
// };

const itemsData = [
  { id: 1, product: "Lemon", quantity: 2 },
  { id: 2, product: "Milk", quantity: 1 },
];

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity: quantity }]);
  };

  return (
    <div>
      <ShopppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
