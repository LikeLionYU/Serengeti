const titleContainer = document.querySelectorAll(".start, .input");
const titleBtn = document.querySelector(".info")
const questionContainer = document.querySelector(".question_container");
const question = document.querySelector('.question_logo');
const contents = document.querySelector('#question');
const type = document.querySelector("#type");
const yBtn = document.querySelector(".answer-1_btn");
const nBtn = document.querySelector('.answer-2_btn');
const resultContainer = document.querySelector(".end_question");
const resultType = document.querySelector(".result_show");
const image = document.querySelector(".result_img");
const explain = document.querySelector(".explain");
const progress = document.querySelector('.progress-bar');

const q = { // question Object 
    1 : {"title" : "질문 1", "contents" : "휴대폰 케이스 안하고 다님", "type" : "char", "Y" : "네", "N" : "아니오"},
    2 : {"title" : "질문 2", "contents" : "술 마실 때 컨디션 안 마심", "type" : "char", "Y" : "네", "N" : "아니오"},
    3 : {"title" : "질문 3", "contents" : "추워도 자켓 안 입음", "type" : "char", "Y" : "네", "N" : "아니오"},
    4 : {"title" : "질문 4", "contents" : "음식점에서 쿠폰 안 받음", "type" : "char", "Y" : "네", "N" : "아니오"},
    5 : {"title" : "질문 5", "contents" : "배민 리뷰이벤트 참여 안함", "type" : "char", "Y" : "네", "N" : "아니오"},
    6 : {"title" : "질문 6", "contents" : "카드 안 쓰고 현금 씀. 그리고 거스름돈 안 받음", "type" : "char", "Y" : "네", "N" : "아니오"},
    7 : {"title" : "질문 7", "contents" : "약속 늦어도 걸어감", "type" : "char", "Y" : "네", "N" : "아니오"},
    8 : {"title" : "질문 8", "contents" : "라면 먹을 때 앞접시 안씀", "type" : "char", "Y" : "네", "N" : "아니오"},
    9 : {"title" : "질문 9", "contents" : "밥상에 고기 없으면 안 먹음", "type" : "char", "Y" : "네", "N" : "아니오"},
    10 : {"title" : "질문 10", "contents" : "피곤하면 아무데서나 잠. 주차장에서도 잘 수 있음", "type" : "char", "Y" : "네", "N" : "아니오"},
    11 : {"title" : "질문 11", "contents" : "메뚜기 100가지 종류를 알고 있음", "type" : "char", "Y" : "네", "N" : "아니오"},
    12 : {"title" : "질문 12", "contents" : "길 몰라도 지도앱 절대 안 켬", "type" : "char", "Y" : "네", "N" : "아니오"},
    13 : {"title" : "질문 13", "contents" : "유자차에 휘핑크림 추가해서 마심", "type" : "char", "Y" : "네", "N" : "아니오"}
}

const result = { // 최종적으로 gender 추가해야 함
    "upper": {"pos": "상", "explain": "#", "img": "#"},
    "middle": {"pos": "중", "explain": "#", "img": "#"},
    "lower": {"pos": "하", "explain": "#", "img": "#"}
}

let num = 1; // 질문 횟수 카운트
let countYes = 0; // yes 대답 횟수 저장 변수
let name;
let gender; 

function start() {
    if (info.name.value == "") {
        alert("이름을 작성해주세요.")
        return
    } else if (info.gender[0].checked == false && info.gender[1].checked == false) {
        alert("성별을 선택해주세요.");
        return
    } else {
        name = document.getElementById('name').value; // 이름 저장

        // 성별 저장
        for (let i = 0; i < 2; i++) {
            if (document.getElementsByName("gender")[i].checked == true) {  // 체크되어 있다면
                gender = document.getElementsByName("gender")[i].value; // 체크된 값 성별에 저장
                break;
            }
        }

        titleContainer[0].style.display = 'none';
        titleContainer[1].style.display = 'none';
        questionContainer.style.display = 'block';
        
        updateQuestion();
    }
}

yBtn.addEventListener('click', ()=>{
    countYes++;
    updateQuestion()
});

nBtn.addEventListener('click', ()=>{
    updateQuestion();
});

function updateQuestion() { // Example 1~5 하, 6~10 중, 11~13 상
    if (num == 13) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = "block";

        countYes >= 11 ? show_result("upper") : 11 > countYes >= 6 ? show_result("middle") : show_result("lower")
    } else {
        progress.setAttribute('style', `width : calc(100/13*${num}%)`);
        question.innerHTML = q[num].title;
        contents.innerHTML = q[num].contents;
        num++;
    }
}

function show_result(answer) {
    image.setAttribute('src', result[answer].img); 
    resultType.innerHTML = `${name}님은 ${result[answer].pos + gender}입니다.`; 
    explain.innerHTML = result[answer].explain;
}

function prevent_multi_check(n) {
    let obj = document.getElementsByName("gender");
    for (let i=0; i < obj.length; i++)
        if (obj[i] != n)
            obj[i].checked = false;
}

function open_result() {
    document.getElementsByClassName("end_question")[0].style.display = 'none'
    document.getElementsByClassName("result_container")[0].style.display = 'block'
}