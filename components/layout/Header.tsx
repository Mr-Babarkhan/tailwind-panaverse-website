

export default function Header() {
  return (
    <header className="flex justify-between max-w-screen-xl mx-auto bg-white py-6 px-3 sticky top-0">
            {/* logo  */}
        <div>
            <h1 className="text-xl font-bold">panaverse dao</h1>
        </div>
        {/* nav  */}
        <ul className="flex space-x-2 font-semibold">
            <li>Home</li>
            <li>About</li>
        </ul>
    </header>
  )
}
