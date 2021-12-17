
export function home(req, res) {
  return res.render('home');
}

export function login(req, res) {
  return res.send('Datas of LOGIN');
}

export function logout(req, res) {
  return res.render('logout');
}
