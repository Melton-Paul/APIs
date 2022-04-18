
  document.getElementById("getActivity").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(reponse => reponse.json())
    .then(data => {
        document.getElementById("activity").textContent = data.activity
    })
  })  