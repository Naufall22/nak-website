const plants = [
 {id:"jahe",name:"Jahe",latin:"Zingiber officinale",category:"Rimpang",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ginger%20%28Zingiber%20officinale%29.jpg?width=1000",short:"Rimpang aromatik yang sering digunakan dalam minuman tradisional.",description:"Jahe adalah tanaman rimpang beraroma hangat yang banyak digunakan sebagai bumbu dan bahan minuman tradisional di Indonesia.",parts:"Rimpang",traits:"Rimpang berwarna krem hingga kekuningan, beraroma khas dan memiliki rasa pedas hangat.",uses:["Digunakan secara tradisional sebagai bahan minuman hangat.","Memberi aroma dan rasa pada masakan."],how:"Rimpang dapat dicuci, diiris, lalu digunakan sebagai bahan seduhan atau masakan sesuai kebutuhan.",safety:"Konsumsi berlebihan dapat menyebabkan rasa tidak nyaman pada lambung. Jika sedang hamil, memiliki kondisi medis, atau menggunakan obat rutin, konsultasikan penggunaan herbal dengan tenaga kesehatan."},
 {id:"kunyit",name:"Kunyit",latin:"Curcuma longa",category:"Rimpang",image:"https://i.ebayimg.com/images/g/j7UAAOSwpEpmpcXv/s-l1200.jpg",short:"Rimpang berwarna kuning yang populer sebagai bumbu dan jamu.",description:"Kunyit merupakan tanaman rimpang dengan pigmen kuning-oranye khas. Tanaman ini digunakan luas sebagai bumbu, pewarna alami, dan bahan jamu tradisional.",parts:"Rimpang",traits:"Rimpang berwarna kuning-oranye dengan aroma khas.",uses:["Bahan jamu tradisional dan minuman rempah.","Bumbu masakan serta pewarna alami."],how:"Kunyit yang telah dibersihkan dapat digunakan dalam masakan atau olahan tradisional.",safety:"Bahan pangan tidak sama dengan suplemen berkonsentrasi tinggi. Produk kunyit dapat berinteraksi dengan obat tertentu; konsultasikan kepada tenaga kesehatan bila menggunakan obat rutin."},
 {id:"temulawak",name:"Temulawak",latin:"Curcuma xanthorrhiza",category:"Rimpang",image:"https://awsimages.detik.net.id/community/media/visual/2020/02/19/100ae5ea-bf49-4a64-83bb-e996141d0443_169.png?w=1200",short:"Tanaman asli kawasan Asia Tenggara yang dikenal dalam jamu.",description:"Temulawak adalah tanaman rimpang yang banyak dikenal dalam tradisi jamu Indonesia. Rimpangnya mengandung senyawa seperti kurkuminoid dan minyak atsiri.",parts:"Rimpang",traits:"Rimpang besar dengan bagian dalam kuning hingga jingga dan aroma rempah.",uses:["Digunakan sebagai bahan jamu tradisional.","Digunakan sebagai rempah dalam minuman dan olahan pangan."],how:"Rimpang yang bersih dapat diolah menjadi bahan minuman atau masakan tradisional.",safety:"Bukti manfaat untuk kondisi medis tertentu masih bervariasi. Hindari menjadikannya pengganti pengobatan dan konsultasikan dahulu jika memiliki gangguan hati, batu empedu, atau sedang menggunakan obat."},
 {id:"serai",name:"Serai",latin:"Cymbopogon citratus",category:"Daun",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tanglad_%28lemongrass%2C_Cymbopogon_citratus%29_-_Philippines.jpg/1280px-Tanglad_%28lemongrass%2C_Cymbopogon_citratus%29_-_Philippines.jpg",short:"Rumput beraroma sitrus yang sering dipakai dalam masakan.",description:"Serai atau sereh merupakan tanaman rumput beraroma lemon yang populer sebagai bumbu masakan dan bahan minuman.",parts:"Batang dan daun",traits:"Daun panjang dan ramping; batang bawah berwarna hijau pucat hingga putih.",uses:["Memberi aroma pada sup, gulai, dan masakan lainnya.","Digunakan sebagai bahan minuman rempah tradisional."],how:"Batang dapat dimemarkan lalu dimasukkan ke masakan atau direbus sebagai minuman.",safety:"Hentikan penggunaan jika muncul reaksi alergi atau iritasi. Minyak esensial pekat tidak boleh diminum sembarangan."},
 {id:"lidah-buaya",name:"Lidah Buaya",latin:"Aloe vera",category:"Lidah buaya",image:"https://cdn.shopify.com/s/files/1/0726/1303/6329/files/ALOE_STOCK_2_HIGHRES_1.jpg?v=1713974757",short:"Tanaman sukulen yang banyak digunakan dalam perawatan kulit.",description:"Lidah buaya adalah tanaman sukulen dengan gel bening di dalam daunnya. Gel digunakan dalam sejumlah produk perawatan kulit dan kosmetik.",parts:"Gel bagian dalam daun",traits:"Daun tebal berdaging, berwarna hijau, dengan tepi bergerigi kecil.",uses:["Gel digunakan dalam produk pelembap dan perawatan kulit.","Diolah sebagai bahan kosmetik atau produk tertentu yang aman dikonsumsi."],how:"Untuk kulit, pilih produk yang diformulasikan khusus dan lakukan uji tempel terlebih dahulu.",safety:"Lateks kuning di bawah kulit daun berbeda dari gel bening dan dapat bersifat pencahar serta berisiko bila tertelan. Jangan mengonsumsi olahan rumahan yang belum diproses dengan benar."},
 {id:"daun-sirih",name:"Daun Sirih",latin:"Piper betle",category:"Daun",image:"https://static.wixstatic.com/media/8965ae_c93fa039cb364978a9067bae34cf6479~mv2.jpg/v1/fit/w_500%2Ch_500%2Cq_90/file.jpg",short:"Daun aromatik yang dikenal dalam tradisi perawatan lokal.",description:"Sirih merupakan tanaman merambat tropis dengan daun beraroma. Daunnya memiliki sejarah penggunaan dalam berbagai tradisi lokal.",parts:"Daun",traits:"Daun berbentuk hati, berwarna hijau dan memiliki aroma khas ketika diremas.",uses:["Dikenal dalam praktik tradisional dan budaya di sejumlah daerah.","Ekstraknya digunakan dalam beberapa produk kebersihan yang diformulasikan khusus."],how:"Gunakan produk yang terdaftar dan sesuai petunjuk pada label; hindari penggunaan pada area sensitif tanpa arahan profesional.",safety:"Bukti klinis untuk banyak penggunaan tradisional masih terbatas. Jangan menggunakan larutan pekat atau memasukkan ramuan ke area tubuh sensitif."},
 {id:"sambiloto",name:"Sambiloto",latin:"Andrographis paniculata",category:"Daun",image:"https://www.naturalcurelabs.com/cdn/shop/articles/Andrographis_paniculata_plant_fl__2K_202607231041.jpg?v=1784821735&width=600",short:"Herba dengan rasa sangat pahit yang dikenal dalam jamu.",description:"Sambiloto merupakan tumbuhan herba yang dikenal karena rasa pahitnya dan digunakan dalam sebagian tradisi pengobatan herbal.",parts:"Daun dan bagian atas tanaman",traits:"Daun hijau lonjong dengan rasa sangat pahit.",uses:["Digunakan dalam beberapa formulasi jamu tradisional.","Dipelajari dalam penelitian terkait berbagai aktivitas biologis; bukti klinis tidak selalu konklusif."],how:"Jangan menentukan dosis pengobatan sendiri. Jika mempertimbangkan produk sambiloto, ikuti label produk resmi dan minta saran tenaga kesehatan.",safety:"Dapat menimbulkan efek samping dan berinteraksi dengan obat. Tidak cocok untuk semua orang, termasuk pada kondisi kehamilan; konsultasikan sebelum penggunaan."},
 {id:"pegagan",name:"Pegagan",latin:"Centella asiatica",category:"Daun",image:"https://www.santi-shop.eu/web/image/54109/gotu%20kola",short:"Herba berdaun kecil yang tumbuh di tempat lembap.",description:"Pegagan adalah tumbuhan menjalar yang tumbuh di lingkungan lembap. Tanaman ini digunakan dalam tradisi lokal dan juga diteliti untuk penggunaan topikal tertentu.",parts:"Daun dan bagian atas tanaman",traits:"Daun membulat seperti kipas dengan tangkai panjang.",uses:["Digunakan dalam makanan atau ramuan tradisional di sejumlah wilayah.","Ekstraknya terdapat pada beberapa produk perawatan kulit."],how:"Pilih produk yang jelas komposisi dan petunjuk pemakaiannya. Cuci bahan pangan dengan baik sebelum diolah.",safety:"Bukti manfaat untuk berbagai klaim kesehatan masih berkembang. Ekstrak dapat menimbulkan efek samping; konsultasikan jika memiliki penyakit hati atau menggunakan obat."},
 {id:"kencur",name:"Kencur",latin:"Kaempferia galanga",category:"Rimpang",image:"https://asset.kompas.com/crops/OuURpA5MtD2p4QmhJXqFTkPuhQw%3D/272x0%3A1024x501/1200x900/data/photo/2025/05/03/68159502715e1.jpg",short:"Rimpang beraroma khas yang menjadi bahan beras kencur.",description:"Kencur merupakan tanaman rimpang yang sering digunakan dalam masakan dan minuman tradisional, termasuk beras kencur.",parts:"Rimpang",traits:"Rimpang kecil dengan aroma kuat dan daun yang tumbuh dekat permukaan tanah.",uses:["Bahan minuman tradisional beras kencur.","Bumbu dan rempah dalam masakan."],how:"Cuci rimpang hingga bersih dan gunakan sebagai bahan pangan atau minuman tradisional.",safety:"Pastikan bahan diolah secara higienis. Jangan menganggap minuman herbal sebagai pengganti perawatan medis."},
 {id:"bawang-putih",name:"Bawang Putih",latin:"Allium sativum",category:"Lainnya",image:"https://img.lemde.fr/2011/06/24/18/0/667/445/1440/960/60/0/ill_1540223_3568_ail.jpg",short:"Bumbu dapur dengan aroma kuat dan sejarah penggunaan panjang.",description:"Bawang putih adalah tanaman umbi yang menjadi bahan penting dalam berbagai masakan. Berbagai senyawanya juga telah diteliti dalam studi nutrisi.",parts:"Umbi",traits:"Umbi tersusun dari siung-siung berlapis kulit tipis.",uses:["Bumbu masakan sehari-hari.","Senyawa dalam bawang putih telah diteliti, tetapi tidak menjamin pencegahan atau penyembuhan penyakit."],how:"Gunakan sebagai bagian dari pola makan seimbang dan masakan sehari-hari.",safety:"Suplemen bawang putih dapat meningkatkan risiko perdarahan dan berinteraksi dengan obat tertentu. Penggunaan sebagai bumbu pangan berbeda dari suplemen dosis tinggi."},
 {id:"kemangi",name:"Kemangi",latin:"Ocimum basilicum",category:"Daun",image:"https://imgx.parapuan.co/crop/0x0%3A0x0/x/photo/2021/04/06/kemangijpg-20210406100300.jpg",short:"Daun aromatik yang umum dijadikan lalapan dan bumbu.",description:"Kemangi adalah tanaman berdaun aromatik yang sering dikonsumsi sebagai lalapan atau pelengkap hidangan di Indonesia.",parts:"Daun dan pucuk muda",traits:"Daun hijau dengan aroma segar khas.",uses:["Lalapan dan pelengkap masakan.","Memberi aroma pada makanan."],how:"Cuci daun di bawah air mengalir dan sajikan sebagai bagian dari makanan.",safety:"Cuci bersih untuk mengurangi kotoran dan kontaminasi. Tanaman pangan tidak dimaksudkan untuk menggantikan pengobatan."},
 {id:"meniran",name:"Meniran",latin:"Phyllanthus niruri",category:"Lainnya",image:"https://budayabali.com/uploads/images/202309/image_870x580_64fae74b57072.jpg",short:"Herba kecil yang tumbuh liar di wilayah tropis.",description:"Meniran merupakan tumbuhan kecil yang dapat ditemukan di daerah tropis dan dikenal dalam sejumlah ramuan tradisional.",parts:"Bagian atas tanaman",traits:"Batang kecil dengan daun mungil tersusun rapi dan buah kecil di bawah ranting.",uses:["Dikenal dalam penggunaan tradisional di sejumlah daerah.","Berbagai klaim kesehatan masih membutuhkan penilaian bukti ilmiah yang memadai."],how:"Jangan mengolah tanaman liar untuk diminum sebelum identifikasi spesies dan keamanan dipastikan.",safety:"Identifikasi tanaman harus tepat dan produk herbal dapat berinteraksi dengan obat. Mintalah saran tenaga kesehatan sebelum penggunaan untuk tujuan medis."}
];

const grid = document.getElementById("plantGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("plantModal");
const modalContent = document.getElementById("modalContent");
let activeCategory = "Semua";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[char]));
}

function renderPlants() {
  const query = searchInput.value.trim().toLocaleLowerCase("id");
  const filtered = plants.filter(plant => {
    const matchesCategory = activeCategory === "Semua" ||
      (activeCategory === "Lainnya" ? plant.category === "Lainnya" : plant.category === activeCategory);
    const searchable = `${plant.name} ${plant.latin} ${plant.category} ${plant.short}`.toLocaleLowerCase("id");
    return matchesCategory && searchable.includes(query);
  });
  resultCount.textContent = `${filtered.length} tanaman`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  grid.innerHTML = filtered.map(plant => `
    <article class="plant-card">
      <div class="plant-image-wrap">
        <img class="plant-image" src="${escapeHtml(plant.image)}" alt="Foto ${escapeHtml(plant.name)}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x480/eaf4ec/176b45?text=Foto+Tanaman'">
        <span class="plant-category">${escapeHtml(plant.category)}</span>
      </div>
      <div class="plant-card-body">
        <h3>${escapeHtml(plant.name)}</h3>
        <p class="latin">${escapeHtml(plant.latin)}</p>
        <p class="card-description">${escapeHtml(plant.short)}</p>
        <div class="card-bottom"><a href="#detail-${escapeHtml(plant.id)}" class="text-link detail-link" data-id="${escapeHtml(plant.id)}">Lihat detail <span>→</span></a><button class="detail-button" data-id="${escapeHtml(plant.id)}">Selengkapnya</button></div>
      </div>
    </article>`).join("");
}

function openPlant(id) {
  const plant = plants.find(item => item.id === id);
  if (!plant) return;
  modalContent.innerHTML = `
    <img class="modal-image" src="${escapeHtml(plant.image)}" alt="Foto ${escapeHtml(plant.name)}" onerror="this.onerror=null;this.src='https://placehold.co/900x500/eaf4ec/176b45?text=Foto+Tanaman'">
    <div class="modal-body">
      <span class="eyebrow green">PROFIL TANAMAN</span>
      <h2 id="modalTitle">${escapeHtml(plant.name)}</h2>
      <p class="latin">${escapeHtml(plant.latin)}</p>
      <div class="tag-row"><span class="tag">${escapeHtml(plant.category)}</span><span class="tag">Bagian: ${escapeHtml(plant.parts)}</span></div>
      <div class="detail-block"><h3>Informasi umum</h3><p>${escapeHtml(plant.description)}</p></div>
      <div class="detail-block"><h3>Ciri-ciri</h3><p>${escapeHtml(plant.traits)}</p></div>
      <div class="detail-block"><h3>Penggunaan dan manfaat tradisional</h3><ul>${plant.uses.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
      <div class="detail-block"><h3>Cara pemanfaatan</h3><p>${escapeHtml(plant.how)}</p></div>
      <div class="safety-box"><strong>⚠ Catatan keamanan</strong><p>${escapeHtml(plant.safety)}</p></div>
    </div>`;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
  history.replaceState(null, "", `#tanaman-${plant.id}`);
}
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  history.replaceState(null, "", "#katalog");
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-id]");
  if (button) {
    event.preventDefault();
    openPlant(button.dataset.id);
  }
});
searchInput.addEventListener("input", renderPlants);
document.getElementById("filterList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.toggle("active", chip === button));
  renderPlants();
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
    event.preventDefault(); searchInput.focus();
  }
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }
});
const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => backTop.classList.toggle("hidden", window.scrollY < 450));
backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent = new Date().getFullYear();

function getPublicUrl() {
  return location.protocol === "file:" ? "" : location.href.split("#")[0];
}
function renderQr() {
  const target = document.getElementById("qrcode");
  const url = getPublicUrl();
  document.getElementById("currentUrl").textContent = url || "Jalankan lewat hosting untuk membuat QR publik";
  target.innerHTML = "";
  if (!url) {
    target.innerHTML = '<p class="tiny muted">QR publik tersedia setelah website di-hosting.</p>';
    document.getElementById("qrStatus").textContent = "Kamu sedang membuka file lokal. Publikasikan website lalu buka URL HTTPS untuk membuat QR.";
    document.getElementById("downloadQr").disabled = true;
    return;
  }
  if (typeof QRCode === "undefined") {
    target.innerHTML = '<p class="tiny muted">Pustaka QR belum termuat. Periksa koneksi internet dan muat ulang halaman.</p>';
    document.getElementById("downloadQr").disabled = true;
    return;
  }
  new QRCode(target, {text:url, width:190, height:190, colorDark:"#123d2b", colorLight:"#ffffff", correctLevel:QRCode.CorrectLevel.H});
  document.getElementById("qrStatus").textContent = "QR dibuat dari alamat aktif. Pastikan URL tidak berubah setelah QR dicetak.";
  document.getElementById("downloadQr").disabled = false;
}
document.getElementById("copyUrl").addEventListener("click", async () => {
  const url = getPublicUrl();
  if (!url) { alert("Publikasikan website terlebih dahulu agar memiliki URL publik."); return; }
  try {
    await navigator.clipboard.writeText(url);
    document.getElementById("copyUrl").textContent = "✓";
    setTimeout(() => document.getElementById("copyUrl").textContent = "▢", 1500);
  } catch {
    prompt("Salin alamat website ini:", url);
  }
});
document.getElementById("downloadQr").addEventListener("click", () => {
  const qr = document.querySelector("#qrcode canvas") || document.querySelector("#qrcode img");
  if (!qr) { alert("QR belum siap. Pastikan koneksi internet aktif lalu muat ulang halaman."); return; }
  const link = document.createElement("a");
  link.download = "nawwaf-alifah-kamilah-qr.png";
  link.href = qr.tagName.toLowerCase() === "canvas" ? qr.toDataURL("image/png") : qr.src;
  link.click();
});
renderPlants();
window.addEventListener("load", renderQr);
