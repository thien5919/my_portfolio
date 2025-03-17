
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import GymBuddiesApp from './screens/GymBuddiesApp';
import Home from './screens/HomeScreen';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gym-buddies" element={<GymBuddiesApp />} />
            </Routes>
        </BrowserRouter>       
    );
    }
    export default App;
