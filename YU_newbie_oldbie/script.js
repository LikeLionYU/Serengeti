const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
// St1~5 : 학년
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
        "content": "뒷푸영을 가봤다",
        "A": "O",
        "B": "N"
        // o : old / n : new
    },
    2: { "title": "문제 2번", 
    "content": "대체번호 입력을 통해 출결을 해봤다", 
    "A": "O",
    "B": "N"},
    3: { "title": "문제 3번", 
    "content": "마스크를 안 낀 홍만이를 본 적이 있다",
    "A": "O",
    "B": "N"},
    4: { "title": "문제 4번", 
    "content": "교’외’셔틀을 탑승해봤다",
    "A": "O",
    "B": "N"},
    5: { "title": "문제 5번", 
    "content": " 불야돈을 먹어봤다",
    "A": "O",
    "B": "N"},
    6: { "title": "문제 6번", 
    "content": "학교 축제에서 싸이를 본 횟수는?",
    "A": "O",
    "B": "N"},
    7: { "title": "문제 7번", 
    "content": "카페 마운틴(a.k.a 산다방)을 안다",
    "A": "O",
    "B": "N"},
    8: { "title": "문제 8번", 
    "content": "새내기 엠티를 가봤다",
    "A": "O",
    "B": "N"},
    9: { "title": "문제 9번", 
    "content": "동아리 가두모집을 당해봤다",
    "A": "O",
    "B": "N"},
    10: { "title": "문제 10번", 
    "content": "축제 주막에서 파는 술을 먹어봤다",
    "A": "O",
    "B": "N"},
    11: { "title": "문제 11번", 
    "content": "프잉, 아잉 수업을 하기 전 건물 1층의 핫도그집에서 핫도그를 먹어봤다",
    "A": "O",
    "B": "N"},
    12: { "title": "문제 12번", 
    "content": "중도 뒤 삼거리의, 삼각표지판에 그려진 모양으로 알맞은 것은?",
    "A": "O",
    "B": "N"},
    13: { "title": "문제 12번", 
    "content": "브라운그릴을 안다?",
    "A": "O",
    "B": "N"},
    14: { "title": "문제 12번", 
    "content": "3학년부터는 동아리 신규 가입이 불가한 것이 너무하다고 생각된다",
    "A": "O",
    "B": "N"},
    15: { "title": "문제 12번", 
    "content": "영남대역이 없어 사월역에 내려서 셔틀을 타고 학교에 온 적이 있다",
    "A": "O",
    "B": "N"},
    16: { "title": "문제 12번", 
    "content": "나는 학교에 갈 때 과잠을 자주 입는다",
    "A": "O",
    "B": "N"}
}
const result = {
    "ISTJ": {
        "animal": "하마",
        "explain": "하마 설명",
        "img": "lion.jpg"
    },
    "ISFJ": { "animal": "부엉이", "explain": "부엉이 설명", "img": "lion.jpg" },
    "INFJ": { "animal": "물소", "explain": "물소 설명", "img": "lion.jpg" },
    "INTJ": { "animal": "치타", "explain": "치타 설명", "img": "lion.jpg" },
    "ISTP": { "animal": "나무늘보", "explain": "나무늘보 설명", "img": "lion.jpg" },
    "ISFP": { "animal": "거북이", "explain": "거북이 설명", "img": "lion.jpg" },
    "INFP": { "animal": "코끼리", "explain": "코끼리 설명", "img": "lion.jpg" },
    "INTP": { "animal": "침팬지", "explain": "침팬지 설명", "img": "lion.jpg" },
    "ESTP": { "animal": "악어", "explain": "악어 설명", "img": "lion.jpg" },
    "ESFP": { "animal": "미어캣", "explain": "미어캣 설명", "img": "lion.jpg" },
    "ENFP": { "animal": "멋쟁이 사자", "explain": "멋쟁이 사자 설명", "img": "lion.jpg" },
    "ENTP": { "animal": "태양새", "explain": "태양새 설명", "img": "lion.jpg" },
    "ESTJ": { "animal": "기린", "explain": "기린 설명", "img": "lion.jpg" },
    "ESFJ": { "animal": "고릴라", "explain": "고릴라 설명", "img": "lion.jpg" },
    "ENFJ": { "animal": "카피바라", "explain": "카피바라 설명", "img": "lion.jpg" },
    "ENTJ": { "animal": "호랑이", "explain": "호랑이 설명", "img": "lion.jpg" }
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