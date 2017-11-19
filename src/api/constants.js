const apiURL = 'http://localhost:3000'

if (process.env.NODE_ENV === 'production') {
  console.log('Production api url not configured')
}

export const API_URL = apiURL
