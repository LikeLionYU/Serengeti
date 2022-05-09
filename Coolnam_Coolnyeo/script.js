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

//qNum 
const q = {
    1: { "title": "문제 1번",
        "body":"애인이 다른 이성친구랑 맞담을 하러 간다면? ",
        "A": "'나는 비흡연자니까 어쩔 수 없지.' 보내준다.", "B": "안괜찮다" },
    2: { "title": "문제 2번",
        "body":"데이트 중 이성 친구가 급한 일이 생겨서 애인에게 와달라고 한다. 애인이 가겠다고 한다면?",
        "A": "괜찮다", "B": "안괜찮다" },
    3: { "title": "문제 3번", 
        "body":"인스타 보관함에 전 남자/여자친구 사진이 있다면? ", 
        "A": "괜찮다", "B": "안괜찮다" },
    4: { "title": "문제 4번", 
        "body":"애인이 동성 친구들과 헌팅 포차에 간다면? ", 
        "A": "괜찮다", "B": "안괜찮다" },
    5: { "title": "문제 5번", 
        "body":"애인이 여사친/남사친과 찍은 사진을 프로필 사진으로 한다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    6: { "title": "문제 6번", 
        "body":"여사친/남사친이 길에서 다시 신발을 고쳐 신으려고 할 때, 애인이 잡아준다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    7: { "title": "문제 7번", 
        "body":"애인이 내 친구와 한달간 단둘이 몰래 만나면서 나를 위한 이벤트를 준비했다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    8: { "title": "문제 8번", 
        "body":"애인이 밤 늦게까지 술 마시다가 같은 방향에 사는 이성친구와 단둘이 택시타고 집에 간다면?", 
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
        "body":"내 애인의 남사친(여사친)이 알고보니 전남친(전여친) 관계였다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    13: { "title": "문제 13번", 
        "body":"남친(여친) 조수석에 못보던 여자(남자) 머리카락이 발견됐다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    14: { "title": "문제 14번", 
        "body":"동성 친구와 술마시러 간 애인, 전화 중 동성이 아닌 이성의 목소리가 들린다면?", 
        "A": "괜찮다", "B": "안괜찮다" },
    15: { "title": "문제 15번", 
        "body":"애인이 내 친구의 신발끈을 묶어준다면?", 
        "A": "괜찮다", "B": "안괜찮다" },

}
const result = {
    100:{"person":"100%", "explain":"당신은 100% 쿨남, 쿨녀입니다"},//13~15
    80:{"person":"80%", "explain":"당신은 80% 쿨남, 쿨녀입니다"},//9~12
    50:{"person":"50%", "explain":"당신은 50% 쿨남, 쿨녀입니다"},//6~8
    25:{"person":"25%", "explain":"당신은 25% 쿨남, 쿨녀입니다"},//3~5
    0:{"person":"0%", "explain":"당신은 0% 쿨남, 쿨녀입니다"}//0~2
}
let num = 1;

titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
});

let score;
aBtn.addEventListener('click', () => {
    score++;
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    updateQuestion();
});

function updateQuestion() {
    if (num == 16) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        switch(score){
            case score>12 :
                person.innerHTML = result[100].person;
                explain.innerHTML = result[100].explain;
                // image.setAttribute('src', result[100].img);
                break;
            case 12>score && score>9 :
                person.innerHTML = result[80].person;
                explain.innerHTML = result[80].explain;
                // image.setAttribute('src', result[80].img);
                break;
            case 9>score && score>6 :
                person.innerHTML = result[50].person;
                explain.innerHTML = result[50].explain;
                // image.setAttribute('src', result[50].img);
                break;
            case 6>score && score>3 :
                person.innerHTML = result[25].person;
                explain.innerHTML = result[25].explain;
                // image.setAttribute('src', result[25].img);
                break;
            case 3>score :
                person.innerHTML = result[0].person;
                explain.innerHTML = result[0].explain;
                // image.setAttribute('src', result[0].img);
                break;
        }

    }
    else { // 수정 필요
        // pro.setAttribute();
        qnum.innerHTML = num/15;
        question.innerHTML = q[num].title;
        body.innerHTML = q[num].body;
        aBtn.innerHTML = q[num].A;
        bBtn.innerHTML = q[num].B;
        num++;
        
    }
}

