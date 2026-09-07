import api from '../lib/axios'

export async function login(credentials) {
  const response = await api.post('/api/login', credentials)

  const { token, user, person } = response.data

  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(user))

  if (person) {
    localStorage.setItem('person', JSON.stringify(person))
  }

  return {
    user,
    person,
    token,
  }
}

export async function register(userData) {
  const response = await api.post('/api/register', userData)

  const { user, person, message } = response.data

  // S'assurer qu'un ancien token ne reste pas en local
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('person')

  return {
    user,
    person,
    message,
  }
}

export async function getCurrentUser() {
  const response = await api.get('/api/user')

  return response.data
}

export async function logout() {
  try {
    await api.post('/api/logout')
  } finally {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('person')
  }
}

export async function forgotPassword(email) {
  const response = await api.post('/api/forgot-password', {
    email,
  })

  return response.data
}