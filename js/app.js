(function () {
  var menu = [["dashboard", "Dasboard", "index.html", "bi-house-door"],
  ["status", "Status", "status.html", "bi-calendar3"],
  ["laporan", "Laporan", "laporan.html", "bi-file-earmark-text"],
  ["reservasi", "Data Reservasi", "data-reservasi.html", "bi-card-list"],
  ["pengguna", "Data Pengguna", "data-pengguna.html", "bi-person"],
  ["ruang", "Data Ruang", "data-ruang.html", "bi-person-lines-fill"]];
  var page = document.body.dataset.page, el = document.getElementById("sidebar");
  if (!el) return;
  el.className = "sidebar";
  el.innerHTML = '<div class="brand">Roomly</div><div class="brand-sub">Reservasi Ruang Belajar</div><nav>' +
    menu.map(function (m) { return '<a class="nav-btn' + (m[0] === page ? ' active' : '') + '" href="' + m[2] + '"><i class="bi ' + m[3] + '"></i>' + m[1] + '</a>'; }).join("") +
    '</nav>';
})();

function filterStatus(selectId, tableId, colIdx) {
  var v = document.getElementById(selectId).value;
  document.querySelectorAll("#" + tableId + " tbody tr").forEach(function (tr) {
    var s = tr.cells[colIdx].innerText.trim();
    tr.style.display = (v === "Semua Status" || s === v) ? "" : "none";
  });
}
