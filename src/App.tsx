import { menuItems } from "./data/db"

function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Restaurant Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
        </div>

        <div>
          <h2>Your order</h2>
        </div>
      </main>
    </>
  )
}

export default App
