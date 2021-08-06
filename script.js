const input1 = document.getElementById("input1");
const kembalian = document.getElementById("kembalian");
const spanTotalHarga = document.getElementById("totalHarga");
const htmlHargaItem = document.getElementById("hargaItem");
const btnPlus = document.querySelector(".btn");
const ul = document.getElementById("ul");

// set harga Barang
let setHargaBarang = [];
let setNamaBarang = [];
let namaBarang;
let hargaBarang;

const namaBarang1 = barangs.map((barang) => {
  setHargaBarang.push(barang.harga);
  setNamaBarang.push(barang.nama);
  return `<li><p class="list-barang" onclick=ItemClick(this) id=${barang.id} >${barang.nama}</p></li>`;
});
console.log(namaBarang1);
ul.innerHTML = namaBarang1.join("");

const ItemClick = (e) => {
  if (e.textContent === setNamaBarang[e.id - 1]) {
    hargaBarang = setHargaBarang[e.id - 1];
    namaBarang = setNamaBarang[e.id - 1];
  }
};

// ----------bagian Input Cari--------
const Cari = () => {
  const input = document.getElementById("inputSearch");
  const filter = input.value.toUpperCase();
  const li = document.getElementsByTagName("li");
  let p, txtValue;

  for (i = 0; i < li.length; i++) {
    p = li[i];

    txtValue = p.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

// ----------Akhir bagian Input Cari--------

// set dibayar
let dibayar = 0;
const setDibayar = () => {
  dibayar = parseInt(input1.value);
};

// set jumlah barang
let jumlahBarang;
const setJumlahBarang = (jml) => {
  jumlahBarang = parseInt(jml.value);
};
// formater duid
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 2,
});

function val() {
  console.log(dibayar);
  const hasilKembalian = dibayar - totalHarga;
  kembalian.innerHTML = formatter.format(hasilKembalian);
}
// fungsi ambil harga dari select
let totalHarga = 0;
let hargaItem = 0;
const btnTambah = () => {
  console.log(namaBarang);
  console.log(hargaBarang);
  console.log(jumlahBarang);
  if (hargaBarang === undefined) {
    htmlHargaItem.innerHTML += `<p class="daftar-item">Tidak ada barang yang dipilih</p>`;
    spanTotalHarga.innerHTML = "Tidak ada barang yang dipilih";
  } else {
    hargaItem += hargaBarang * jumlahBarang;
    htmlHargaItem.innerHTML += `<p class="daftar-item" >${namaBarang} ${jumlahBarang} : <span >${formatter.format(
      hargaItem
    )}</span></p>`;
    console.log(hargaItem);
    hargaItem = 0;
    totalHarga += hargaBarang * jumlahBarang;
    spanTotalHarga.innerHTML = formatter.format(totalHarga);
  }
};
// BTn Tambah dengan Enter
document.body.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    btnPlus.click();
  }
});
