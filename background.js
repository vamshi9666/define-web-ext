chrome.runtime.onMessage.addListener(receiver);

window.word = "definer";

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}
