import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    const quantity = parseInt(quantityRef.current!.value);
    onAddItem(newProduct, quantity);
    inputRef.current!.value = "";
    quantityRef.current!.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product name" ref={inputRef} />
      <input type="number" min={0} placeholder="Quantity" ref={quantityRef} />
      <button type="submit">Add items</button>
    </form>
  );
}

export default ShoppingListForm;
