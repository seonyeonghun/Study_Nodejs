"use strict"; // ES6 모던한 방식 vs ~ES5 방식

function MakeUser(name, age) {
    this.userName = name;
    this.userAge = age;
    this.info = function(){
        if(this.userAge >= 20) {
            return `${this.userName}은(는) <strong>성인</strong> 입니다`
        } else {
            return `${this.userName}은(는) <strong>미성년자</strong> 입니다`
        }
    }
}

// 생성자 함수를 사용하면, 각 객체가 변수와 메소드를 메모리에 생성하게 됨
const irene = new MakeUser("아이린", 11)
const jack = new MakeUser("김잭잭", 20)
const parker = new MakeUser("파커 데이비슨", 43)

document.write(irene.info(), "<br>")
document.write(jack.info(), "<br>")
document.write(parker.info(), "<br>")

