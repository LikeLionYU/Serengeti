const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question_title');
const type = document.querySelector('#question_content');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');


const oldbie = document.querySelector('#oldbie');
const newbie = document.querySelector('#newbie');

const grade=document.querySelector('#grade');
const pro = document.querySelector('.progress-bar');
const ONresult = document.querySelector('#ONresult');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');

const q = {
    1: {
        "title": "문제 1번",
        "content": "뒷푸영을 가봤다",
        "A": "네",
        "B": "아니요"
        // o : old / n : new
    },
    2: { "title": "문제 2번", 
    "content": "대체번호 입력을 통해 출결을 해봤다", 
    "A": "네",
    "B": "아니요"},
    3: { "title": "문제 3번", 
    "content": "마스크를 안 낀 홍만이를 본 적이 있다",
    "A": "네",
    "B": "아니요"},
    4: { "title": "문제 4번", 
    "content": "교’외’셔틀을 탑승해봤다",
    "A": "네",
    "B": "아니요"},
    5: { "title": "문제 5번", 
    "content": " 불야돈을 먹어봤다",
    "A": "네",
    "B": "아니요"},
    6: { "title": "문제 6번", 
    "content": "학교 축제에서 싸이를 본 적이 있다.",
    "A": "네",
    "B": "아니요"},
    7: { "title": "문제 7번", 
    "content": "카페 마운틴(a.k.a 산다방)을 안다",
    "A": "네",
    "B": "아니요"},
    8: { "title": "문제 8번", 
    "content": "새내기 엠티를 가봤다",
    "A": "네",
    "B": "아니요"},
    9: { "title": "문제 9번", 
    "content": "동아리 가두모집을 당해봤다",
    "A": "네",
    "B": "아니요"},
    10: { "title": "문제 10번", 
    "content": "축제 주막에서 파는 술을 먹어봤다",
    "A": "네",
    "B": "아니요"},
    11: { "title": "문제 11번", 
    "content": "프잉, 아잉 수업을 하기 전 건물 1층의 핫도그집에서 핫도그를 먹어봤다",
    "A": "네",
    "B": "아니요"},
    12: { "title": "문제 12번", 
    "content": "영남대 학생지원센터 가는 길에는 '행복 Start'라는 표지판이 있다.",
    "A": "네",
    "B": "아니요"},
    13: { "title": "문제 13번", 
    "content": "브라운그릴을 안다?",
    "A": "네",
    "B": "아니요"},
    14: { "title": "문제 14번", 
    "content": "3학년부터는 동아리 신규 가입이 불가한 것이 너무하다고 생각된다",
    "A": "네",
    "B": "아니요"},
    15: { "title": "문제 15번", 
    "content": "영남대역이 없어 사월역에 내려서 셔틀을 타고 학교에 온 적이 있다",
    "A": "네",
    "B": "아니요"},
    16: { "title": "문제 16번", 
    "content": "나는 학교에 갈 때 과잠을 자주 입는다",
    "A": "아니요",
    "B": "네"}
}
const result = {
    "first_grade": {
        "person": "아무것도 모르는 순수한 새내기",
        "explain": "캠퍼스라이프를 막 시작하면서 캠퍼스의 풍경들, 사람들, 교수님들, 강의실, 축제, 동아리 모든 게 신기해요! 영남대는 왜 이렇게 큰지 길을 헤매다가 지도를 보고 강의실에 겨우 도착하기도 했구요. 입고싶은 옷도 마음껏 입고, 술도 마음껏 마실거예요!",
        "img": "image/first_grade.png"
    },
    "second_grade": { "person": "조금씩 적응해가는 영대인",
     "explain": "대학교에 들어와서 캠퍼스 라이프에 점점 적응해가고 있어요. 이젠 눈 감고도 강의실을 찾아갈 수 있을 것 같아요! 캠퍼스에 대한 환상도 점점 걷혀가지만 우리에겐 종강이 있으니까요.",
      "img": "image/second_grade.jpg" },
    "third_grade": { "person": "아무것도 모르는 뉴비가 귀여운 고학년 학교 시설을 통달하신 당신",
     "explain": "분명 영남대가 되게 크게 느껴졌는데 지금은 그렇게 큰 것 같지도 않아요. 내가 영남대에서 필요한 것이 어디에 있는지 다 파악하고 있으니까요. 오늘도 옷은 최대한 편하게 입고, 모자도 푹 눌러쓰고 학교를 가요. 혹시 과잠에 대한 미련도 점점 사라져가고 있진 않으신가요?",
      "img": "image/third_grade.png"},
    "fourth_grade": { "person": "모든 것을 통달한 올드비",
     "explain": "나는 가만히 학교다닌 죄밖에 없는데 사람들이 나를 화석이라 부르기 시작해서 속상해요. 학년만 높지 아직 어린데 동아리 모집에 저는 부르지 않아서 속상해요.",
      "img": "image/fourth_grade.png" },
    "fifth_grade": { "person": "캠퍼스의 역사를 경험한 화석",
     "explain": "영대에 많은 것이 사라지고 생기는 것을 두 눈으로 본 당신. 혹시 학번을 말했을 때 주변사람들이 다들 놀라지 않던가요?",
      "img": "image/fifth_grade.jpg" }
}


let num = 1;

// 여기까지만 사전 제공

titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

aBtn.addEventListener('click', () => {
    switch (type.innerHTML) {
        case 'oldbie':
            let o = parseInt(oldbie.value);
            oldbie.setAttribute('value', o + 1);
            break;
        case 'newbie':
            let n = parseInt(newbie.value);
            newbie.setAttribute('value', n + 1);
            break;
    }
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    switch (type.innerHTML) {
        case 'oldbie':
            let o = parseInt(oldbie.value);
            oldbie.setAttribute('value', o + 1);
            break;
        case 'newbie':
            let n = parseInt(newbie.value);
            newbie.setAttribute('value', n + 1);
            break;
    }
    updateQuestion();
});

function updateQuestion() { 
    if (num == 16) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

        if(oldbie.value<=4){ result_grade = "first_grade"}
        else if(4<oldbie.value<=7){ result_grade = "second_grade"}
        else if(7<oldbie.value<=10){ result_grade = "third_grade"}
        else if(10<oldbie.value<=13){ result_grade = "fourth_grade"}
        else{result_grade = "fifth_grade"}
        
        grade.innerHTML = result[result_grade].person;
        explain.innerHTML = result[result_grade].explain;
        image.setAttribute('src', result[result_grade].img)
    }
    else {
        pro.setAttribute('style', `width : calc(100/16*${num}%`);
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].content;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}