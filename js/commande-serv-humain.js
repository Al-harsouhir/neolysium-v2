
function Message() {
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;

  const webhook = "https://canary.discord.com/api/webhooks/1415363525123248168/DpojBUDlTJrCFu2vwvTLTcfdQR--gI8vRC4MGfDBqmCSWrRit3J4L9bGkOqnH4VxN9ch";

  const contents = `nouvelle commande :\nName : ${name}\nMessage : ${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Constent-type', 'application/json');

  const params = {
      content: contents
  }
  request.send(JSON.stringify(params));
}