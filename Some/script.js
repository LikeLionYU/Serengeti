const q = {
    1: {
      title:
        '#1 연락이 갑자기 3시간 끊긴뒤에 상대방이 연락이 왔다.  상대방의 문자는?',
      type: 'OX',
      A: '미안 잠들어서 연락을 못했어',
      B: '아, 답장한다는 걸 깜빡했지 뭐야',
    },
    2: {
      title: '#2 상대방이 나에게 만나자고 한다면?',
      type: 'OX',
      A: '혹시 이번 주말에 시간 괜찮아?',
      B: '나 심심한데 우리 동네 와서 30분만 놀다 갈래?',
    },
    3: {
      title: '#3 카페에서 대화중에 친구의 휴대폰에 전화가 왔다면?',
      type: 'OX',
      A: '중요한 전화 아니니까 나중에 받지뭐',
      B: '어, 여보세요?',
    },
    4: {
      title:
        '#4 일주일 뒤 크리스마스가 다가온다. 상대방와 연락을 하던 도중 크리스마스에 관한 이야기가 나왔다. 상대방의 반응은?',
      type: 'OX',
      A: '크리스마스에 같이 영화 볼래?',
      B: '그날 갑자기 친구가 결혼을 한다네',
    },
    5: {
      title:
        '#5 상대방와 함께 단 둘이 길을 걷다가 상대방과 자신이 같이 아는 지인을 만났다. 상대방의 반응은?',
      type: 'ox',
      A: '안녕~ 오랜만이네!',
      B: '뭐야? 오늘 왜 이리 예뻐?/잘생겼어? 어디 놀러 가는거야?',
    },
    6: {
      title: '#6 주변 사람들이 사귀냐고 놀렸을 때 상대방의 반응은?',
      type: 'OX',
      A: '그런거 아니야 (발그레)',
      B: '어, 그냥 아는 동생이야',
    },
    7: {
      title: '#7 요즘 연애 안하냐고 은근히 물어봤을때 상대방의 대답은?',
      type: 'OX',
      A: '좋은사람 있으면 연애 하고싶지(너랑) ㅎㅎ',
      B: '바빠서 사귀고 싶지는 않네(단호)',
    },
    8: {
      title:
        '#8 상대방과 연락하다가 잠이들었다. 아침에 확인한 카톡, 어떤 연락이 와있을까?',
      type: 'OX',
      A: '잘자. 좋은 꿈꿔',
      B: '(연락없음)',
    },
    9: {
      title:
        '#9 오늘 기분좋게 머리를 자르고 상대방에게 바뀐게 없냐고 물어봤다. 상대방의 대답은?',
      type: 'OX',
      A: '머리 잘랐네. 잘 어울린다',
      B: '음 뭐가 달라졌지...',
    },
    10: {
      title: '#10 학교에서 나란히 걸어가고 있을 때?',
      type: 'OX',
      A: '같이 걸으며 슬쩍 손이 부딪힌다',
      B: '일정한 거리를 유지한다',
    },
    11: {
      title: '#11 친구들이랑 이쁜 카페에 간  상대방이 보낸 카톡은?',
      type: 'OX',
      A: '여기 진짜 이쁘더라 다음에 같이 가자~',
      B: '친구들이랑 다음에 한번 가봐',
    },
    12: {
      title:
        '#12 땅콩알러지가 있는데, 마라탕을 먹을때 땅콩소스가 괜찮냐고 직원이 물어봤다. 상대방의 반응은?',
      type: 'OX',
      A: '너 땅콩 알러지 있잖아. 괜찮아요 빼주세요',
      B: '네 상관없어요',
    },
  };
  
  const result = {
    goback: {
      type: '고백각',
      explain: '지금 당장 고백하세요! 상대방도 당신을 좋아하고 있습니다.',
      youtube: 'https://www.youtube.com/embed/YRKR45rYoLg',
      lyrics: '아무리 생각을 하고 또 해도 믿어지지 않을 만큼 사랑해🎵',
      img: 'goback.jpg',
    },
    some: {
      type: '썸',
      explain:
        '친구이상 연인미만 우정사이! 연인 관계는 아니지만 서로 사귀는 듯이 가까이 지내는 미묘한 관계네요.',
      youtube: 'https://www.youtube.com/embed/VwuWNLX3jsM',
  
      lyrics: '내꺼인 듯 내꺼 아닌 내꺼 같은 너🎵',
      img: 'some.jpg',
    },
    aqua: {
      type: '어장',
      explain:
        '어장관리에 격분한다 하더라도 이성을 대상으로 폭행, 살해 등을 저질러서는 안 됩니다. 나중에 더 좋은 사람 만나서 연애에 성공합시다.',
      youtube: 'https://www.youtube.com/embed/yKZRVuJ5v2I',
      lyrics: '헤엄 헤엄 헤엄🎵',
      img: 'aqua.jpg',
    },
    friend: {
      type: '친구',
      explain:
        '친구사이입니다! 이성으로서 너무 매력이 없을 경우 등에 속하는 군요. 불구하고 무조건 연애감정이 안 생길 것이라고 단정지을 수는 없어요. 이성으로서 매력이 없더라도 다른 면모가 어필되는 경우도 굉장히 많으니 화이팅!',
      youtube: 'https://www.youtube.com/embed/7C0W70FgeWo',
      lyrics: '친구여 친구여 친구여🎵',
      img: 'friend.jpg',
    },
  };
  
  const titleContainer = document.querySelector('.title-container');
  const titleBtn = document.querySelector('#startBtn');
  const questionContainer = document.querySelector('.question-container');
  const question = document.querySelector('#question');
  const type = document.querySelector('#type');
  const aBtn = document.querySelector('#a');
  const bBtn = document.querySelector('#b');
  const OX = document.querySelector('#OX');
  const pro = document.querySelector('.progress-bar');
  const LOVE = document.querySelector('#some');
  const lyrics = document.querySelector('#lyrics');
  const explain = document.querySelector('#explain');
  // const image = document.querySelector('#result-img');
  const youtube = document.querySelector('#youtube');
  const resultContainer = document.querySelector('.result-container');
  
  let num = 1;
  let love = '';
  titleBtn.addEventListener('click', () => {
    titleContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    updateQuestion();
  });
  
  aBtn.addEventListener('click', () => {
    let O = parseInt(OX.value);
    OX.setAttribute('value', O + 1);
    updateQuestion();
  });
  
  bBtn.addEventListener('click', () => {
    updateQuestion();
  });
  
  function updateQuestion() {
    if (num == 13) {
      questionContainer.style.display = 'none';
      resultContainer.style.display = 'block';
      if (OX.value <= 2) {
        love = 'friend';
      } else if (OX.value <= 6 && OX.value > 2) {
        love = 'aqua';
      } else if (OX.value <= 10 && OX.value > 6) {
        love = 'some';
      } else {
        love = 'goback';
      }
  
      LOVE.innerHTML = result[love]['type'];
      lyrics.innerHTML = '"' + result[love]['lyrics'] + '"';
      explain.innerHTML = result[love]['explain'];
      // img.setAttribute('src', result[love]['img']);
      youtube.setAttribute('src', result[love]['youtube']);
    } else {
      pro.setAttribute('style', `width : calc(100/12*${num}%);`);
      question.innerHTML = q[num].title;
      type.innerHTML = q[num].type;
      aBtn.innerHTML = q[num].A;
      bBtn.innerHTML = q[num].B;
      num++;
    }
  }