const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question_title');
const type = document.querySelector('#question_content');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');


const oldbie = document.querySelector('#oldbie');
const newbie = document.querySelector('#newbie');

let grade=document.querySelector('#grade');

const pro = document.querySelector('.progress-bar');
const ONresult = document.querySelector('#ONresult');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');

const q = {
    1: {
        "title": "문제 1번",
        "content": "나는 뒷푸영을 가본 적이",
        "A": "있다",
        "B": "없다"
        // o : old / n : new
    },
    2: { "title": "문제 2번", 
    "content": "나는 대체번호 입력을 통해 출결을 해본 적이", 
    "A": "있다",
    "B": "없다"},
    3: { "title": "문제 3번", 
    "content": "나는 마스크를 안 낀 홍만이를 본 적이",
    "A": "있다",
    "B": "없다"},
    4: { "title": "문제 4번", 
    "content": "나는 교외셔틀을 탑승해본 적이<br>(교내셔틀 X, 교외셔틀 O)",
    "A": "있다",
    "B": "없다"},
    5: { "title": "문제 5번", 
    "content": "나는 불야돈을 먹어본 적이",
    "A": "있다",
    "B": "없다"},
    6: { "title": "문제 6번", 
    "content": "나는 학교 축제에서 싸이를 본 적이",
    "A": "있다",
    "B": "없다"},
    7: { "title": "문제 7번", 
    "content": "나는 카페 마운틴(a.k.a 산다방)을",
    "A": "안다",
    "B": "모른다"},
    8: { "title": "문제 8번", 
    "content": "나는 새내기 엠티를 가본 적이",
    "A": "있다",
    "B": "없다"},
    9: { "title": "문제 9번", 
    "content": "나는 동아리 가두모집을 당해본 적이",
    "A": "있다",
    "B": "없다"},
    10: { "title": "문제 10번", 
    "content": "나는 축제 주막에서 파는 술을 먹어본 적이",
    "A": "있다",
    "B": "없다"},
    11: { "title": "문제 11번", 
    "content": "나는 외국어교육원 1층의 핫도그집에서 <br> 핫도그를 먹어본 적이",
    "A": "있다",
    "B": "없다"},
    12: { "title": "문제 12번", 
    "content": "영남대 학생지원센터 가는 길에는<br>'★★ Start'라는 표지판이 있다.<br>★★에 들어갈 말은?",
    "A": "웃음",
    "B": "행복"},
    13: { "title": "문제 13번", 
    "content": "나는 브라운그릴이 어디있었는지",
    "A": "안다",
    "B": "모른다"},
    14: { "title": "문제 14번", 
    "content": "나는 3학년부터는 동아리 신규 가입이 불가한 것이",
    "A": "너무하다고 생각한다",
    "B": "너무하지 않다고 생각한다"},
    15: { "title": "문제 15번", 
    "content": "나는 영남대역이 없어서<br>사월역에 내린 후 셔틀을 타고 학교에 온 적이",
    "A": "있다",
    "B": "없다"},
    16: { "title": "문제 16번", 
    "content": "나는 학교에 갈 때 과잠을",
    "A": "자주 입지 않는다",
    "B": "자주 입는다"}
}
const result = {
    "first_grade": {
        "person": "👶🏻 아무것도 모르는 순수한 새내기 🍼",
        "explain": "캠퍼스 라이프를 막 시작하면서<br>캠퍼스 시설, 사람들, 축제, 동아리 모든 게 신기해요!<br>그런데 영남대 캠퍼스는 왜 이렇게 크죠?<br>강의 들으러 갔다가 길을 헤매기 십상이에요.<br>그래도 이젠 대학생이 되었으니<br>입고 싶은 옷도 마음껏 입고<br>동기들과 술도 마음껏 마실 거예요!",
        "img": "image/first_grade.png"
    },
    "second_grade": { "person": "👦🏻 조금씩 적응해가는 영대인 👧🏻",
     "explain": "캠퍼스 라이프가 무엇인지 알게 되었어요!<br>이제 강의실 정도는 다 익숙해져서<br>눈 감고도 찾아갈 수 있다고요.<br>캠퍼스에 대한 환상도 점점 걷혀가면서<br>이젠 종강만을 바라보는 참 대학생이 되었답니다!",
      "img": "image/second_grade.jpg" },
    "third_grade": { "person": "👨🏻 아무것도 모르는 뉴비가 귀여운 고학년 👩🏻",
     "explain": "학교 시설을 통달하신 당신!<br>영남대는 이제 넓다고 생각되지 않아요.<br>캠퍼스 어디에 뭐가 있는지도 다 파악하고 있어요.<br>하지만 몸은 옛날 같지가 않군요.<br>네? 강의 들으러 갈 땐 무슨 옷을 제일 즐겨 입냐고요?<br>당연히 가장 편한 옷이죠!",
      "img": "image/third_grade.png"},
    "fourth_grade": { "person": "👴🏻 모든 것을 통달한 올드비 👵🏻",
     "explain": "산은 산이고 물은 물이로다!<br>삶의 이치를 다 깨달은 것만 같아요.<br>나는 가만히 학교 다닌 죄밖에 없는데<br>사람들이 나를 늙은 사람으로 보는 것 같네요.<br>학년만 높을 뿐이지, 난 아직 어린데...<br>",
      "img": "image/fourth_grade.png" },
    "fifth_grade": { "person": "🦖 캠퍼스의 역사를 함께한 화석 🦕",
     "explain": "영남대의 역사를 직접 경험하며<br>캠퍼스가 변화하는 것을 두 눈으로 본 당신!<br>사람들은 어느덧 나를 화석이라 불러요.<br>어쩌다 학번을 말해주면 다들 흠칫 놀라던데...<br>흠, 놀랄 만하긴 하다고 생각해요.",
      "img": "image/fifth_grade.jpg" }
}


let num = 1;

// 여기까지만 사전 제공

titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'flex';
    
    updateQuestion();
});

aBtn.addEventListener('click', () => {

    if(num==17){
        let n = parseInt(newbie.value);
        newbie.setAttribute('value', n + 1);
    }
    else{
        let o = parseInt(oldbie.value);
        oldbie.setAttribute('value', o + 1);
    }
    updateQuestion();
});

bBtn.addEventListener('click', () => {
    
    if(num==17){
        let o = parseInt(oldbie.value);
        oldbie.setAttribute('value', o + 1);
    }
    else{
        let n = parseInt(newbie.value);
        newbie.setAttribute('value', n + 1);    
    }
    updateQuestion();
});

function updateQuestion() { 
    if (num == 17) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'flex';

        if(oldbie.value<=4){ result_grade = "first_grade"}
        else if(oldbie.value<=7){ result_grade = "second_grade"}
        else if(oldbie.value<=10){ result_grade = "third_grade"}
        else if(oldbie.value<=13){ result_grade = "fourth_grade"}
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