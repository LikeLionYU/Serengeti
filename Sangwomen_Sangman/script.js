const titleContainer = document.querySelectorAll(".start, .input");
const titleBtn = document.querySelector(".info")
const questionContainer = document.querySelector(".question_container");
const question = document.querySelector('.question_logo');
const qImg = document.querySelector('.question_img');
const contents = document.querySelector('#question');
const type = document.querySelector("#type");
const yBtn = document.querySelector(".answer-1_btn");
const nBtn = document.querySelector('.answer-2_btn');
const resultContainer = document.querySelector(".end_question");
const resultType = document.querySelector(".result_show");
const image = document.querySelector(".result_img");
const explain = document.querySelector(".explain");
const feature = document.querySelector(".feature");
const progress = document.querySelector('.progress-bar');

const q = { // question Object 
    1 : {"title" : "질문 1", "contents" : "휴대폰을 새로 산 당신. 휴대폰 케이스는 어떤 걸 끼울까?", "img":"./src/케이스.png", "type" : "char", "Y" : "케이스..? 그게 뭔데", "N" : "이미 끼울지 다 생각해뒀지~ 바로 장착"},
    2 : {"title" : "질문 2", "contents" : "술자리에서 알딸딸해진 채로 귀가하는데, 눈 앞에 편의점이 보인다면?", "img":"./src/컨디션.png", "type" : "char", "Y" : "집 가서 마시려고 술 한 병 더 삼", "N" : "내 속은 소중해..컨디션 or 초코에몽 사서 감"},
    3 : {"title" : "질문 3", "contents" : "외출을 하려고 문을 열었는데 생각보다 바람이 차다..", "img":"./src/추운날.png", "type" : "char", "Y" : "견뎌", "N" : "견디긴 무슨, 롱패딩은 못참지"},
    4 : {"title" : "질문 4", "contents" : "식당에서 음식을 포장하고 있는데 가게 주인께서 포인트를 챙겨주시려고 한다.", "img":"./src/배달쿠폰.png", "type" : "char", "Y" : "애초에 쿠폰 존재도 모르고 있음. 밥 다 먹고 봉투 채로 버림", "N" : "냉장고에 붙여놓고 10장 다 채워가면 설레서 잠 못 잠."},
    5 : {"title" : "질문 5", "contents" : "간만에 배달을 시켜서 먹으려는데 리뷰 이벤트를 하고 있다면?", "img":"./src/리뷰이벤트.png", "type" : "char", "Y" : "먹기도 바쁜데 뭔 사진찍고 글을 쓰냐. 안 합니다.", "N" : "사진찍고 글만 쓰면 되는 건데 이걸 안 해??? 당연히 참여합니다."},
    6 : {"title" : "질문 6", "contents" : "깻잎을 먹으려고 집었는데 두 장이 붙어서 올라와버렸다.", "img":"./src/깻잎.png", "type" : "char", "Y" : "내가 잡은 건 한 방에 먹는다!", "N" : "여러 개 먹으면 짜서 못 먹어..어떻게든 떼어낸다."},
    7 : {"title" : "질문 7", "contents" : "오늘은 약속이 있는 날. 그런데 시간을 잘못 봐서 늦을 거 같다.", "img":"./src/지각.png", "type" : "char", "Y" : "원래 약속은 1시간 뒤에 도착하는 게 국룰. 친구들도 적응해서 집에서 아직 자고 있음.", "N" : "약속은 꼭 지켜야지. ㅠㅠ 바로 택시타고 달려간다."},
    8 : {"title" : "질문 8", "contents" : "라면을 먹으려고 열심히 끓이고 당신은...", "img":"./src/라면앞접시.gif", "type" : "char", "Y" : "어차피 나 혼자 먹는 건데 뭐. 그냥 냄비 채로 먹음", "N" : "앞접시는 필수지~!~!"},
    9 : {"title" : "질문 9", "contents" : "친구가 밥을 해준다고 해서 자취방에 놀러갔는데 고기 반찬이 없다면?", "img":"./src/밥상고기.png", "type" : "char", "Y" : "고기 없는 밥상은 인정할 수 없다. 바로 엎어버린다.", "N" : '"뭐..고기 없어도 잘 먹어~" 그냥 먹는다.'},
    10 : {"title" : "질문 10", "contents" : "모임에서 술을 너무 많이 마신 나머지 집까지 가기가 너무 힘들다면?", "img":"./src/길바닥.png", "type" : "char", "Y" : '"아, 몰라. 오늘부터 여기가 내 집이다!" 그냥 주차장에서 잠', "N" : "이 험난한 세상에 무슨 꼴을 당하려고? 귀소본능 필수야"},
    11 : {"title" : "질문 11", "contents" : "냉면을 먹으려고 하는데 식당에서 가위를 안 줬을 때", "img":"./src/냉면가위.png", "type" : "char", "Y" : "귀찮은데 그냥 먹지 뭐", "N" : "사장님, 여기 가위 좀 주세요!"},
    12 : {"title" : "질문 12", "contents" : "어느 날 아무생각 없이 길을 걷다 정신차리니 길을 잃어버리고 마는데..", "img":"./src/지도.png", "type" : "char", "Y" : "여행하는 셈치고 그냥 가자~!", "N" : "이러다 이상한 길로 새는 거 아니야..? 바로 지도앱을 켠다."},
    13 : {"title" : "질문 13", "contents" : "스벅에서 주문하려는 당신..주문할 때는 당연히?", "img":"./src/커피주문.png", "type" : "char", "Y" : "절대 6글자를 넘지 않는다..아아!", "N" : "커피에는 말이야..낭만이 있다고. 본인만의 레시피를 줄줄 읊음."}
}

const result = { // 최종적으로 gender 추가해야 함

    "upper": {"pos": "상", 
              "explain": "축하합니다! 당신은 상남자/여자입니다.\
                         <br>태생부터 상남자/여자 유전자를 가지고 태어나셨네요.\
                        <br>앞으로도 진정한 상남자/여자의 표본이 되어주세요!",
              "feature" : "결과에 굉장히 만족하고 있음.\
                          <br>솔직하게 테스트 하면 결과가 달라졌을걸 알고 있음.\
                          <br>친구 중에 하남자(여자) 나올만한 애가 한명 떠오름.",
              "img": "./src/상.png"},
    "middle": {"pos": "중", 
               "explain": "어디에도 속하지 못한 당신.\
                          <br>어정쩡하게 살지말고 하나만 합시다.",
               "feature" : "테스트가 억지라고 자기 위로 하고 있음.\
                            <br>상남자(여자) 소리를 듣고 싶지만, 한번도 들은적 없음.\
                            <br>답변 할 때, 사실 거짓말로 상남자 같은거 체크한거 있음.\
                            <br>테스트 다시 한번 해볼 예정임.",
               "img": "./src/중.jpg"},
    "lower": {"pos": "하", 
              "explain": "이름을 <div class='hahaha' style='display:inline'>이름</div>으로 개명한는 것을 추천드립니다.<br> 당신에게서 상남자의 세포는 찾아볼 수 없을 정도입니다.\
                          <br> 평생 하남자로 살 것이 아니라면 집나간 상남자 세포를 잡아오는건 어떨까요?", 
              "feature": "본인 스스로가 가장 잘 알고 있음.\
                          <br>친구들한테 구질구질하다는 소리 많이 들음.\
                          <br>테스트 하면서 뜨끔한게 한두개가 아님.",
              "img": "./src/하.png"}

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
        name = document.getElementById('name').value;

        gender = (info.gender[0].checked == true) ? info.gender[0].value : info.gender[1].value;

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

function updateQuestion() {
    if (num == 14) {
        questionContainer.style.display = 'none';
        resultContainer.style.display = "block";

        (countYes >= 11) ? show_result("upper") : (11 > countYes && countYes >= 6) ? show_result("middle") : show_result("lower");
        
        let hahaha = document.querySelector(".hahaha");
        hahaha.innerHTML = (name[0] + "쫄" + name[2]);
    } else {
        progress.setAttribute('style', `width : calc(100/13*${num}%)`);
        question.innerHTML = q[num].title;
        contents.innerHTML = q[num].contents;
        qImg.setAttribute('src', q[String(num)].img);
        yBtn.innerHTML = q[num].Y;
        nBtn.innerHTML = q[num].N;
        num++;
    }
}

function show_result(answer) {
    image.setAttribute('src', result[answer].img); 
    resultType.innerHTML = `${name}님은 ${result[answer].pos + gender}입니다.`; 
    explain.innerHTML = result[answer].explain;
    feature.innerHTML = result[answer].feature;

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