export const state = () => ({
  darkMode: false,
  // isDrawerOpen: false,
  // isSpotlightOpen: false,
  // learningLanguage: '',
  // alerts: [],
})

export const mutations = {
  toggleDarkMode(state) {
    const darkMode = !state.darkMode
    if (darkMode) {
      localStorage.setItem('MIGAKU_DARK_MODE', darkMode)
    } else {
      localStorage.removeItem('MIGAKU_DARK_MODE')
    }
    state.darkMode = darkMode
  },
  setDarkMode(state, payload) {
    state.darkMode = payload
  },
  setDrawer(state, payload) {
    state.isDrawerOpen = payload
  },
  setSpotlight(state, payload) {
    state.isSpotlightOpen = payload
  },
  setLearningLanguage(state, payload) {
    state.learningLanguage = payload
  },
  createAlert(state, alert) {
    if (!alert.duration) {
      alert.duration = 5000
    }

    state.alerts = [...state.alerts, alert]
  },
  removeAlert(state, alertId) {
    state.alerts = state.alerts.filter((alert) => alert.id !== alertId)
  },
}
