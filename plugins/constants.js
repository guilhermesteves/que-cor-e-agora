export default ({ app }, inject) => {
  inject('constants', () => {
    return {
      site: 'https://guilhermeesteves.com'
    }
  })
}
