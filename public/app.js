console.log(firebase)


firebase.database().ref('/slist').once('value').then((snapshot) => {
  console.log(snapshot.val()['4']['pic'])
  document.getElementById("propic").src = snapshot.val()['4']['pic']
});