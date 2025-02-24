let nilai = 75;

if (nilai >= 80) {
  console.log("A (Sangat Baik)");
} else if (nilai >= 60) {
  console.log("B (Cukup)");
} else {
  console.log("C (Kurang)");
}

let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa.");
    break;
  default:
    console.log("Hari tidak ditemukan.");
}
