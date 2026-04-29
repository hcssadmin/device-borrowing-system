// ✅ 載入 navbar
export async function loadNavbar() {
  const res = await fetch('/navbar.html')
  const html = await res.text()

  document.getElementById('navbar').innerHTML = html
}

// ✅ render menu（角色控制）
export function renderMenu(role) {
  const menu = document.getElementById("menu")
  menu.innerHTML = ""

  addLink("首頁", "/dashboard.html")

  if (role === "admin") {
    addLink("裝置管理", "/device-management.html")
  }

  addLink("待處理請求", "/request.html")
  addLink("借出設備", "/borrowed-device.html")
}

function addLink(text, href) {
  const link = document.createElement("a")
  link.href = href
  link.innerText = text
  link.className = "btn btn-outline-light btn-sm me-2"
  document.getElementById("menu").appendChild(link)
}
