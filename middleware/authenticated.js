
function isLogged({store,redirect}) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}

export default  {
  isLogged
}
