const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  hrsaasTime: state => state.user.hrsaasTime
}
export default getters
