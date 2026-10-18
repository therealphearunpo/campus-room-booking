import './HomePage.css'
import { CAMPUS_SHIFTS } from '../../config/shifts.js'

export function HomePage() {
  return (
    <div className="home-page">
      <section className="home-page__hero" aria-labelledby="home-title">
        <p className="home-page__eyebrow">Royal University of Phnom Penh</p>
        <h1 id="home-title">Find the right room for your next session.</h1>
        <p className="home-page__intro">
          Search available rooms by teaching shift, compare facilities, and
          manage your bookings in one place.
        </p>
      </section>

      <section className="shift-section" aria-labelledby="shift-title">
        <div className="shift-section__heading">
          <p className="home-page__eyebrow">Daily schedule</p>
          <h2 id="shift-title">Choose a shift</h2>
        </div>

        <div className="shift-grid">
          {CAMPUS_SHIFTS.map((shift) => (
            <article className="shift-card" key={shift.id}>
              <h3>{shift.name}</h3>
              <p className="shift-card__time">{shift.timeLabel}</p>
              <p>{shift.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
