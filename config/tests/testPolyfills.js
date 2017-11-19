const polyfill = global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0)
}

export default polyfill
