const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const EI = document.querySelector('#EI');
const SN = document.querySelector('#SN');
const TF = document.querySelector("#TF");
const JS = document.querySelector("#JP");
const pro = document.querySelector('.progress-bar');
const MBTI = document.querySelector('#mbti');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');


const q = { // 문제 다듬기 
    1: { "title": "문제 1번",
        "body":"애인이 다른 이성친구랑 맞담하러 간다면? ",
        "A": "괜찮다", "B": "안괜찮다" },
    2: { "title": "문제 2번",
        "body":"데이트중 이성 친구가 급한일이 생겨서 와달라고 했을때 보내줄수 있는지?",
        "A": "괜찮다", "B": "안괜찮다" },
    3: { "title": "문제 3번", 
        "body":"인스타 보관함에 전 남자/여자친구 사진이 있는게 괜찮은지? ", 
        "A": "괜찮다", "B": "안괜찮다" },
    4: { "title": "문제 4번", 
        "body":"애인이 내 친구의 신발끈을 묶어준다면? ", 
        "A": "괜찮다", "B": "안괜찮다" },
    5: { "title": "문제 5번", 
        "body":"애인이 여사친/남사친과 찍은 사진을 프로필 사진으로 한다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    6: { "title": "문제 6번", 
        "body":"여사친/남사친이 길에서 다시 신발을 고쳐 신으려고 할 때, 애인이 잡아준다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    7: { "title": "문제 7번", 
        "body":"애인이 내친구와 한달간 단둘이 몰래 만나면서 나를 위한 이벤트를 준비했다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    8: { "title": "문제 8번", 
        "body":"애인이 밤늦게까지 술마시다가 같은 방향에 사는 이성친구와 단둘이 택시타고 집에 간다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    9: { "title": "문제 9번", 
        "body":"애인이 길에서 이성에게 번호를 따였다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    10: { "title": "문제 10번", 
        "body":"애인이 예전에 5년간 연애한 사실을 알게 된다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    11: { "title": "문제 11번", 
        "body":"애인이 이성 직장 동료를 조수석에 태우고 날 만나러 온다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    12: { "title": "문제 12번", 
        "body":"내 애인의 남사친(여사친)이 알고보니 전남친(전여친) 관계였다", 
        "A": "괜찮다", "B": "안괜찮다" },
    13: { "title": "문제 13번", 
        "body":"남친(여친) 조수석에 못보던 여자(남자) 머리카락이 발견됐다! 누구껀지 물어본다~?", 
        "A": "괜찮다", "B": "안괜찮다" },
    14: { "title": "문제 14번", 
        "body":"친구랑 술마시러 간 애인과 전화중 동성이 아닌 이성의 목소리가 들린다", 
        "A": "괜찮다", "B": "안괜찮다" },
    15: { "title": "문제 15번", 
        "body":"갑자기 동성애자라고 헤어지자는 애인", 
        "A": "괜찮다", "B": "안괜찮다" },

}
const result = { // 이거 작성 -> 5개로 작성(?)
    100:{},//13~15
    80:{},//9~12
    50:{},//6~8
    25:{},//3~5
    0:{}//0~2
}

let num = 1;

titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

let qnum;
aBtn.addEventListener('click', () => {
    qnum++;
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    updateQuestion();
});

function updateQuestion() {
    if (num == 16) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';

    }
    else { // 수정 필요
        // pro.setAttribute();
        question.innerHTML = q[num].title;
        type.innerHTML = q[num].type; 
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
    }
}

