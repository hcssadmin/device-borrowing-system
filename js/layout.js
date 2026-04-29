async function loadNavbar() {
  const res = await fetch('/html_module/navbar-admin.html')
  const html = await res.text()
  document.getElementById('navbar').innerHTML = html
}

loadNavbar()
