import Entry from "./components/Entry"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import journalData from "../db/data"

const entryItem = journalData.map((data) => {
        return (
            <Entry 
                data={data}
                key={data.id}
            />
        );
    }
);

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <div>
                {entryItem}
            </div>
            <Footer />
        </div>
    );
};