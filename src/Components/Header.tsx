import React from "react"
import "../App.css"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const Header = () => {
  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
  }

  return (
    <div className="App-header">
      <div>To-Do List</div>
      <div>
      <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={25}
          sunColor="#ede31f"
          moonColor="#212120"
        />
      </div>
    </div>
  )
}

export default Header
