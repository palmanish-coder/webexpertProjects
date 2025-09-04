let qr;

function generateQR() {
  const text = document.getElementById("text").value.trim();
  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = ""; // clear old QR

  if (text) {
    qr = new QRCode(qrContainer, {
      text: text,
      width: 180,
      height: 180
    });
  } else {
    alert("Please enter some text or URL");
  }
}