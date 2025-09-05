// function sendMessage() {
//       const discord = document.getElementById("discord").value;
//       const message = document.getElementById("message").value;

//       console.log(JSON.stringify({ discord, message }))

//       fetch("http://127.0.0.1:5000/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           discord: discord,
//           message: message
//         })
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Erreur HTTP " + response.status);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Réponse du serveur :", data);
//       })
//       .catch(err => {
//         console.error("Erreur lors de la requête :", err);
//       });

//       console.log("fin")

//       debugger

//     }

function sendMessage() {
    const discord = document.getElementById("discord").value;
    const message = document.getElementById("message").value;

    console.log("[DEBUG] Données préparées :", { discord, message });

    const payload = JSON.stringify({ discord, message });
    console.log("[DEBUG] Payload JSON :", payload);

    console.log("[DEBUG] Envoi de la requête POST à http://192.168.1.81:5000/send");

    fetch("http://192.168.1.81:5000/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          discord: discord,
          message: message
        })
    })
    .then(response => {
        console.log("[DEBUG] Statut HTTP reçu :", response.status);
        console.log("[DEBUG] Headers de la réponse :", [...response.headers.entries()]);

        if (!response.ok) {
            console.error("[ERREUR] Réponse non OK :", response.status, response.statusText);
            throw new Error("Erreur HTTP " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("[SUCCÈS] Réponse JSON :", data);
    })
    .catch(err => {
        console.error("[ERREUR] Échec de la requête :", err);
        if (err instanceof TypeError) {
            console.error("[ASTUCE] Cela peut être dû à : CORS, URL invalide, serveur down, ou problème réseau.");
        }
    })
    .finally(() => {
        console.log("[DEBUG] Fin de l'exécution sendMessage()");
    });

    console.log("[DEBUG] Code JS exécuté après fetch()");
    debugger
}
