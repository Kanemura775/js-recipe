const alertMessage = function() {
  alert("クリックしたね")
}
alertMessage()

const button = document.getElementById("button")
// const alertMessage = funtion(){
//     alert("クリックしたね")
// }
button.onclick = alertMessage
// 4行目のalertMessage()と10行目のalertMessageはちがう。
// alertMessage()は1～3行目を実行するもの。
// alertMessageは定義づけするときの名前。
// 10行目がalertMessage()になると、1～3行目を実行した結果（returnとかじゃないから何も帰ってこない）が実行されて意味がない。
// よってonclickが実行されなくなる。

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e)
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function(e) {
  console.log(e.key)
}
