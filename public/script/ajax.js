document.querySelector(".ajaxsend").addEventListener("click", function () {
  var inputData = document.forms[0].elements[0].value;
  sendAjax("http://localhost:3000/ajax_send_email", inputData);
});

function sendAjax(url, data) {
  var data = { email: data };
  data = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
}
