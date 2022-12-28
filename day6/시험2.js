let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];

let cartlist = [1];

makeTag();
//조회
function makeTag() {
  for (let i = 0; i < users.length; i++) {
    let tage = `<tr>
          <td>userno</td>
          <td>${users[i].email}</td>
          <td>${users[i].username}</td>
          <td class="point">${users[i].point}</td>
          <td><button>삭제</button></td>
        </tr> `;
    document.querySelector("#list").innerHTML += tage;
  }
}

//장바구니
document.querySelector("#list").addEventListener("click", function (ev) {
  let btn = ev.target;
  if (btn.tagName == "BUTTON") {
    let username = btn.closest("tr").querySelector("td").innerHTML;
    console.log(username);
  } else if (btn.classList.contains("del")) {
    //삭제
    let userno = btn.closest("tr").getAttribute("td");
    for (let i = 0; i < users.length; i++) {
      if (users[i].userno == userno) {
        users.splice(i, 1);
        break;
      }
    }

    console.table(users);
    btn.closest(".card").remove();
  }
});
