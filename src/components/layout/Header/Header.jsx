import './Header.css'

const navigationItems = [
  { label: 'Rooms', href: '#rooms' },
  { label: 'My bookings', href: '#bookings' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Campus Rooms home">
        Campus Rooms
      </a>

      <nav aria-label="Main navigation">
        <ul className="site-header__nav">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
