import './App.css';
import NavBar from './components/NavBar';
import {
Card,
} from "@material-tailwind/react";

function App() {
  return (
    <>
    <NavBar/>
    <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">

        </Card>

      </div>
    </>
  );
}

export default App;
