"use strict"; // ES6 모던한 방식 vs ~ES5 방식

function MakeUser(name, age) {
    this.userName = name;
    this.userAge = age;
    MakeUser.prototype.info = function(){
        if(this.userAge >= 20) {
            return `${this.userName}은(는) <strong>성인</strong> 입니다`
        } else {
            return `${this.userName}은(는) <strong>미성년자</strong> 입니다`
        }
    }
}

// 프로토타입을 사용하면 객체의 메소드가 공용으로 사용하게 되므로 메모리 절약
// 단 3개의 케이스로 파악하긴 어렵겠지만..
const jackson = new MakeUser("마이클잭슨", 53)
const adele = new MakeUser("아델", 29)
const aulson = new MakeUser("올슨(언니)", 32)

document.write(jackson.info(), "<br>")
document.write(adele.info(), "<br>")
document.write(aulson.info(), "<br>")
