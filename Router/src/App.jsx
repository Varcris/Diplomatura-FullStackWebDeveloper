import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
<nav margin: 10
"1/' padding: 5
«Link toz '
Home
«Link padding: 5 }}>
About
</Link>
<Routes>
<Route element={<Home
<Route element={<About
<Route element={<NoMatch />
</Routes>
</BrowserRouter>
  )
}

export default App
