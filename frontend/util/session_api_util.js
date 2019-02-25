export const signup = (userPayload) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    // data: userPayload
    data: {
      user: userPayload
    }
  })
)

export const login = (userPayload) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {
      user: userPayload
    }
    // data: userPayload
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
)

