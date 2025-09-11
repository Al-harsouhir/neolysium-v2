const WEBHOOK_URL = "https://discord.com/api/webhooks/1415363525123248168/DpojBUDlTJrCFu2vwvTLTcfdQR--gI8vRC4MGfDBqmCSWrRit3J4L9bGkOqnH4VxN9ch";

function sendMessage() {
  const pseudo = document.getElementById("pseudo").value;
  const msg = document.getElementById("message").value;

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "Nouveau message ✨",
        fields: [
          { name: "Pseudo", value: pseudo || "Anonyme" },
          { name: "Message", value: msg || "(vide)" }
        ],
        color: 3447003
      }]
    })
  })
  .then(res => {
    if (res.ok) {
      alert("Message envoyé ✅");
    } else {
      alert("Erreur ❌");
    }
  });
  debugger
}

