import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/">
          <span className="brand-mark">O</span>
          <span>OctoFit Tracker</span>
        </NavLink>
        <nav className="main-nav" aria-label="Primary navigation">
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              <section className="welcome-panel">
                <p className="eyebrow">Performance workspace</p>
                <h1>Train together. Track every win.</h1>
                <p className="lede">
                  Keep your team moving with one clear view of activity, progress, and the next workout.
                </p>
                <div className="quick-links">
                  <NavLink className="primary-action" to="/activities">View activities</NavLink>
                  <NavLink className="secondary-action" to="/workouts">Find a workout</NavLink>
                </div>
              </section>
            }
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
