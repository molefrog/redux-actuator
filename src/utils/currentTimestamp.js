const currentTimestamp = (() => {
  const { performance } = window

  if (performance && performance.now) {
    return () => performance.now()
  }

  // use a fallback if `performance.now`
  // isn't supported by the browser.
  return () => new Date().getTime()
})()

export { currentTimestamp }
