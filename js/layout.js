export function renderMenu(role) {
  const menu = document.getElementById("menu")
  menu.innerHTML = ""

  addLink("狀態主頁", "/dashboard.html")

  if (role === "admin") {
    addLink("裝置管理", "/device-management.html")
  }

  addLink("待處理請求", "/request.html")
  addLink("已借出裝置", "/borrowed-device.html")
}

function addLink(text, href) {
  const li = document.createElement("li")
  li.className = "nav-item"

  const a = document.createElement("a")
  a.className = "nav-link"
  a.href = href
  a.innerText = text

  li.appendChild(a)
  document.getElementById("menu").appendChild(li)
}
