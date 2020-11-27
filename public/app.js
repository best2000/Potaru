console.log(firebase)

function slist_rand() {
  var btn = document.getElementById("rand_btn")
  btn.disabled = true

  smax = 5 //max stars
  let rn = Math.floor((Math.random() * smax) + 1)
  firebase.database().ref('/slist/'+rn.toString()).once('value').then((snapshot) => {
    let s = snapshot.val()
    document.getElementById("sname").innerHTML = s['name']
    document.getElementById("spic").src = s['pic']
    btn.disabled = false
    document.getElementById("re").style.display = "block"
  })
}
