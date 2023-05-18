import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import "./App.css";
import "./fonts/KumbhSans-Black.ttf";
import "./fonts/KumbhSans-Bold.ttf";
import "./fonts/KumbhSans-ExtraBold.ttf";
import "./fonts/KumbhSans-Light.ttf";
import "./fonts/KumbhSans-Medium.ttf";
import "./fonts/KumbhSans-Regular.ttf";
import "./fonts/KumbhSans-SemiBold.ttf";
import "./fonts/KumbhSans-Thin.ttf";

function App() {
    return (
        <div style={{ fontFamily: "Kumbh Sans, sans-serif" }}>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
