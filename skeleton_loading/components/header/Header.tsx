export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-xl font-bold">Furniture</div>

        <nav>
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Products</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
