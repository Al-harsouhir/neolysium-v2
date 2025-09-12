
function Message() {
  let pseudo = document.getElementById("pseudo").value;
  let message = document.getElementById("message").value;

  const webhook = "https://canary.discord.com/api/webhooks/1415363525123248168/DpojBUDlTJrCFu2vwvTLTcfdQR--gI8vRC4MGfDBqmCSWrRit3J4L9bGkOqnH4VxN9ch";

  const contents = `nouvelle commande :\nPseudo : ${pseudo}\nMessage : ${message}`;
  const request = XMLHttpRequest();
  request.open("POST", Webhook);
  request.setRequestHeader('Constent-type', 'application/json');

  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}
