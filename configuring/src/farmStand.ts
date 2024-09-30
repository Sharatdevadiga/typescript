// to compile multiple files in the folder just use -> tsc command

interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - ${product.price}$`);
};
