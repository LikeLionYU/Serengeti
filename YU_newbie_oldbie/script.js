const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const St1 = document.querySelector('#St1');
const St2 = document.querySelector('#St2');
const St3 = document.querySelector("#St3");
const St4 = document.querySelector("#St4");
const St5 = document.querySelector("#St5");
const pro = document.querySelector('.progress-bar');
const ONresult = document.querySelector('#ONresult');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');


const q = {
    1: {
        "title": "문제 1번",
        "type": "EI",
        "A": "E",
        "B": "I"
    },
    2: { "title": "문제 2번", "type": "EI", "A": "E", "B": "I" },
    3: { "title": "문제 3번", "type": "EI", "A": "E", "B": "I" },
    4: { "title": "문제 4번", "type": "SN", "A": "S", "B": "N" },
    5: { "title": "문제 5번", "type": "SN", "A": "S", "B": "N" },
    6: { "title": "문제 6번", "type": "SN", "A": "S", "B": "N" },
    7: { "title": "문제 7번", "type": "TF", "A": "T", "B": "F" },
    8: { "title": "문제 8번", "type": "TF", "A": "T", "B": "F" },
    9: { "title": "문제 9번", "type": "TF", "A": "T", "B": "F" },
    10: { "title": "문제 10번", "type": "JP", "A": "J", "B": "P" },
    11: { "title": "문제 11번", "type": "JP", "A": "J", "B": "P" },
    12: { "title": "문제 12번", "type": "JP", "A": "J", "B": "P" }
}
const result = {
    "first_grade": {
        "person": "아무것도 모르는 순수한 새내기",
        "explain": "캠퍼스라이프를 막 시작하면서 캠퍼스의 풍경들, 사람들, 교수님들, 강의실, 축제, 동아리 모든 게 신기해요! 영남대는 왜 이렇게 큰지 길을 헤매다가 지도를 보고 강의실에 겨우 도착하기도 했구요. 입고싶은 옷도 마음껏 입고, 술도 마음껏 마실거예요!",
        "img": "lion.jpg"
    },
    "second_grade": { "person": "조금씩 적응해가는 영대인",
     "explain": "대학교에 들어와서 캠퍼스 라이프에 점점 적응해가고 있어요. 이젠 눈 감고도 강의실을 찾아갈 수 있을 것 같아요! 캠퍼스에 대한 환상도 점점 걷혀가지만 우리에겐 종강이 있으니까요.",
      "img": "lion.jpg" },
    "third_grade": { "person": "아무것도 모르는 뉴비가 귀여운 고학년 학교 시설을 통달하신 당신",
     "explain": "분명 영남대가 되게 크게 느껴졌는데 지금은 그렇게 큰 것 같지도 않아요. 내가 영남대에서 필요한 것이 어디에 있는지 다 파악하고 있으니까요. 오늘도 옷은 최대한 편하게 입고, 모자도 푹 눌러쓰고 학교를 가요. 혹시 과잠에 대한 미련도 점점 사라져가고 있진 않으신가요?",
      "img": "lion.jpg" },
    "fourth_grade": { "person": "모든 것을 통달한 올드비",
     "explain": "나는 가만히 학교다닌 죄밖에 없는데 사람들이 나를 화석이라 부르기 시작해서 속상해요. 학년만 높지 아직 어린데 동아리 모집에 저는 부르지 않아서 속상해요.",
      "img": "lion.jpg" },
    "fifth_grade": { "person": "캠퍼스의 역사를 경험한 화석",
     "explain": "영대에 많은 것이 사라지고 생기는 것을 두 눈으로 본 당신. 혹시 학번을 말했을 때 주변사람들이 다들 놀라지 않던가요?",
      "img": "lion.jpg" }
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
        case 'EI':
            let e = parseInt(EI.value);
            EI.setAttribute('value', e + 1);
            break;
        case 'SN':
            let s = parseInt(SN.value);
            SN.setAttribute('value', s + 1);
            break;
        case 'TF':
            let t = parseInt(TF.value);
            TF.setAttribute('value', t + 1);
            break;
        case 'JP':
            let j = parseInt(JP.value);
            JP.setAttribute('value', j + 1);
            break;
    }
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    updateQuestion();
});

function updateQuestion() {
    if (num == 13) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

    }
    else {
        // pro.setAttribute();
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}