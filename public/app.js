console.log(firebase)


firebase.database().ref('/slist').once('value').then((snapshot) => {
  console.log(snapshot.val()['1'])
});