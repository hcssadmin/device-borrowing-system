// ✅ 載入 navbar
export async function loadNavbar() {
  const res = await fetch('/navbar.html')
  const html = await res.text()

  document.getElementById('navbar').innerHTML = html
}

export function renderMenu(role) {
  const menu = document.getElementById("menu")
  menu.innerHTML = ""

  addLink("狀態主頁", "/dashboard.html")

  if (role === "admin") {
    addLink("裝置管理", "/device-management.html")
  }

  addLink("待處理請求", "/request.html")
  
  if (role === "admin") {
    addLink("已借出裝置", "/borrowed-device.html")
  } else {
    addLink("已借用裝置", "/borrowed-device.html")
  }
  
}

function addLink(text, href) {
  const li = document.createElement("li")
  li.className = "nav-item"

  const a = document.createElement("a")
  a.className = "nav-link"
  a.href = href
  a.innerText = text

  // ✅ highlight 當前頁
  if (window.location.pathname.includes(href)) {
    a.classList.add("active")
  }

  li.appendChild(a)
  document.getElementById("menu").appendChild(li)
}
