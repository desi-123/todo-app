import Footer from "./components/Footer";
import TodoScreen from "./screens/ToDoScreen";
import { Routes, Route } from 'react-router-dom'
import About from "./components/About";
import Terms from "./components/Terms";
import Header from "./components/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TodoScreen />} />
        <Route path="about" element={<About />} />
        <Route path="term" element={<Terms />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App;
