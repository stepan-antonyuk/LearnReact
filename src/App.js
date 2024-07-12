import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
    name: 'Bobby Bit Byt',
    iamgeUrl: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    imageSize: 90,
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
            <AboutPage />
        </>
    );
}

function MyButton() {
    return (
        <button>
            I'am a button
        </button>
    );
}

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// just if else test
//function IfElse() {
//    isLoggedIn = false;
//    let content;
//    if (isLoggedIn) {
//        content = <AdminPanel />;
//    } else {
//        content = <LoginForm />;
//    }
//    return (
//        <div>
//            {content}
//        </div>
//    );
//}

const products = [
    {title: 'Cabbage',isFruit: false, id: 1},
    {title: 'Garlic',isFruit: false, id: 2},
    {title: 'Apple',isFruit: true, id : 3},
]

function ShoppingList() {
    const listItems = products.map(product =>
        <li key={products.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

function ClickButton() {
    const [count, setCount] = useState(0);

    function OnClick() {
        //alert('You clicked me!');
        setCount(count + 1);
    }

    return (
        <button onClick={OnClick}>
            You Clicked me {count} times!
        </button>
    );
}

function TwoClickButtons() {
    return (
        <div>
            <h1>Two Buttons</h1>
            <ClickButton />
            <br />
            <ClickButton />
        </div>
    );
}

function ShareClickButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            You Clicked me {count} times!
        </button>
    );
}

function TwoClickButtonsShare() {
    const [count, setCount] = useState(0);

    function OnClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Two Buttons sharring counter</h1>
            <ShareClickButton count={count} onClick={OnClick} />
            <br />
            <ShareClickButton count={count} onClick={OnClick} />
        </div>
    );
}

//export default App;
//export default MyApp;
//export default Profile;
//export default ShoppingList;
//export default ClickButton;
//export default TwoClickButtons;
export default TwoClickButtonsShare;
