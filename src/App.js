import './App.css';
import MenuItem from './components/MenuItem';
import logo from './assets/natsu-logo-16x9.png';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  return (
    <div className="main-body">
      <Header />
      <Menu list={menuItems.slice()} />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="container mb-4">
      <img className="logo img-fluid  mx-auto d-block" src={logo} alt="Natsu Nook Logo"></img>
      <h1 className="visually-hidden">Natsu Nook</h1>
      <p className="header-subtitle">~Twilights delights for summer nights~</p>
    </div>
  );
}

function Menu({ list }) {
  return (
    <div className="container d-flex flex-column">
      <h2 className="menu-title">Menu</h2>
      <section className="menu container-fluid card-group row my-4 rounded px-0 mx-0">
          {list.map(function (item) {
            return (
              <MenuItem
                id={item.id}
                title={item.title}
                description={item.description}
                imageName={item.imageName}
                price={item.price}
              />
            )
          })}
      </section>
    </div>
  );
}