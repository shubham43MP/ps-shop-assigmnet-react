export const hasAccessTokenSessionStorage = () => {
  const accessToken = sessionStorage.getItem('access-token')
  if(accessToken) return true
  return false
}