fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: "Nouvelle commande ✨",
        fields: [
          { name: "Pseudo", value: pseudo || "Anonyme" },
          { name: "Message", value: msg }
        ],
        color: 3447003 // bleu
      }]
    })
  });
