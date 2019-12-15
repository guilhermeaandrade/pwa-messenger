import consumer from "./consumer"

document.addEventListener("turbolinks:load", () => {
  const contactHeader = document.querySelector("div.contact-header");
  if (contactHeader) {
    consumer.subscriptions.create({ channel: "StatusChannel", user: contactHeader.dataset.user }, {
      connected() {
        console.log("Connected at StatusChannel");
      },

      disconnected() {},

      received(data) {
        document.querySelector("div.contact-header div.status").innerHTML = data['status']
      }
    });
  }
});
