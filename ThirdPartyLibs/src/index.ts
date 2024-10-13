import axios from "axios";
import _ from "lodash"; //npm i --save-dev @types/lodash

_.sample([23, 43, 12, 56, 78, 34, 23, 12]);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("Woo!!");
    const { data } = res;
    printUser(data);
  })
  .catch((e) => {
    console.log("Boo!!", e);
  });

function printUser(user: User): void {
  console.log(user.name);
  console.log(user.username);
  console.log(user.email);
  console.log(user.phone);
}

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("Woo!!");
    const { data } = res;
    data.forEach((user) => printUser(user));
  })
  .catch((e) => {
    console.log("Boo!!", e);
  });
