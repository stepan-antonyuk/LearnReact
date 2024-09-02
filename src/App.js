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


// tic-tac-toe start from here
function Square({value, onClick}) {
    return (
        <button 
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    );
}

//export default function Board() {
function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function OnClick(i) {
        if (squares[i]) { return; }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => OnClick(0)}/>
                <Square value={squares[1]} onClick={() => OnClick(1)}/>
                <Square value={squares[2]} onClick={() => OnClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => OnClick(3)}/>
                <Square value={squares[4]} onClick={() => OnClick(4)}/>
                <Square value={squares[5]} onClick={() => OnClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => OnClick(6)}/>
                <Square value={squares[7]} onClick={() => OnClick(7)}/>
                <Square value={squares[8]} onClick={() => OnClick(8)}/>
            </div>
        </>
    );
}

const userInfo = {
    name: "Fname Lname",
    tenant: "Tenant #1",
}

var emails = [
    {id: 1, toUser: "Me", fromUser: "Him", emailText: "This is a text!"},
    {id: 2, toUser: "Me", fromUser: "Him", emailText: "This is a another text!"}
]

function UserInfo() {
    return (
        <>
            <p>{"Username: " + userInfo.name}</p>
            <p>{"Tenant: " + userInfo.tenant}</p>
        </>
    );
}

function EmailButton({emailID, onClick}) {
    return (
        <>
            <button onClick={() => onClick(emailID)}>
                X    
            </button>
                
        </>
    );
}

function Email({email}) {
    return (
        <>
            <text> To: {email.toUser} </text>
            <br />
            <text> From: {email.fromUser} </text>
            <br />
            <text> {email.emailText} </text>
            <br />
            <br />
        </>
    );
}

function DisplayEmails() {
    function OnClick({id}) {
        //emails = emails.filter((item) => item.id !== id);
        emails.splice(id,1)
        console.log(emails);
    }

    const rows = []
    for (let i=0; i < emails.length; i++) {
        rows.push(<EmailButton emailID={emails[i].id} onClick={OnClick}/>);
        rows.push(<Email email={emails[i]}/>);
    }
    return (
        <tbody>
            <text> Emails </text>
            <br />
            <br />
            {rows}
        </tbody>
    );
}

//============================== Syniti Project ==================
function Navbar({user}) {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Homepage</a>
            <ul>
                <li className="active">
                    <a href="/emails">Emails</a>
                </li>
                <li className="active">
                    <a href="/storage">Storage</a>
                </li>
                <li className="active">
                    <a href="/pictures">Pictures</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a className="user-info">{user.name}</a>
                </li>
                <li>
                    <a className="user-info">{user.tenant}</a>
                </li>
            </ul>
        </nav>
    );
}

function GenericButton({count, onClick, text}) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

function Pictures() {
    const [count, setCount] = useState(0);
    const [file, setFile] = useState();
    const [imgs, setImgs] = useState([]);

    const rows = [];
    for (let i=0; i < imgs.length; i++) {
        rows.push(<img src={imgs[i]} />);
    }

    function AddPicture() {
        setCount(count + 1);
    }

    function RemovePicture() {
        if (count > 0) {
            imgs.pop();
            setCount(count - 1);
        }
    }

    function UploadImg(e) {
        imgs.push(URL.createObjectURL(e.target.files[0]));
        setCount(count + 1);
    }

    return (
        <div className="apps">
            <h1>Pictures</h1>
            <p> You have {count} pictures! </p>
            <input type="file" onChange={UploadImg} />
            <br />
            {rows}
            <ul>
                <li>
                    <GenericButton count={count} onClick={AddPicture} text={"Add"} />
                </li>
                <li>
                    <GenericButton count={count} onClick={RemovePicture} text={"Remove"} />
                </li>
            </ul>
        </div>
    );
}

function Storage() {
    const [storage, setStorage] = useState(0);
    const [maxStorage, setMaxStorage] = useState(10);

    function Download() {
        if (storage < maxStorage) {
            setStorage(storage + 1);
        }
    }

    function FreeUpSpace() {
        if (storage > 0) {
            setStorage(storage - 1);
        }
    }

    return(
        <div className="apps">
            <h1>Storage</h1>
            <p> You have {maxStorage - storage} left to use</p>
            <ul>
                <li>
                    <GenericButton count={storage} onClick={Download} text={"Add"} />
                </li>
                <li>
                    <GenericButton count={storage} onClick={FreeUpSpace} text={"Remove"} />
                </li>
            </ul>
        </div>
    );
}

function Emails() {}

function HomePage() {
    return (
        <>
            <Navbar user={userInfo}/>
            <br />
            <Pictures />
            <br />
            <Storage />
        </>
    );
}

//export default App;
//export default MyApp;
//export default Profile;
//export default ShoppingList;
//export default ClickButton;
//export default TwoClickButtons;
//export default TwoClickButtonsShare;
export default HomePage;
