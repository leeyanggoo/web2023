const allMusic = [
    {
        name : "1. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view01",
        audio: "music_audio01"
    },{
        name : "2. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view02",
        audio: "music_audio02"
    },{
        name : "3. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view03",
        audio: "music_audio03"
    },{
        name : "4. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view04",
        audio: "music_audio04"
    },{
        name : "5. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view05",
        audio: "music_audio05"
    },{
        name : "6. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view06",
        audio: "music_audio06"
    },{
        name : "7. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view07",
        audio: "music_audio07"
    },{
        name : "8. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view08",
        audio: "music_audio08"
    },{
        name : "9. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view09",
        audio: "music_audio09"
    },{
        name : "10. 저리가라",
        artist : "ㅁㄴㅇ",
        img : "music_view10",
        audio: "music_audio10"
    },
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");
const musicPrevBtn = musicWrap.querySelector("#control-prev");
const musicNextBtn = musicWrap.querySelector("#control-next");
const musicProgress = musicWrap.querySelector(".progress")
const musicProgressBar = musicWrap.querySelector(".progress .bar")
const musicProgressCurrent = musicWrap.querySelector(".timer .current");
const musicProgressDuration = musicWrap.querySelector(".timer .duration");

let musicIndex = 1; // 현재 음악 인덱스

// 음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name; // 노래 이름
    musicArtist.innerText = allMusic[num-1].artist; // 가수 이름
    musicView.src = `img/${allMusic[num-1].img}.png`;   // 노래 이미지
    musicView.alt = allMusic[num-1].name;   // 노래 이미지 정보
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`; // 노래 파일
};

// 재생
const playMusic = () =>{
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title", "정지");
    musicPlay.setAttribute("class", "stop");
    musicAudio.play();
};

// 장치를 정지합니다 뭐야 안 되잖아
const pauseMusic = () => {
    musicWrap.classList.remove("paused");
    musicPlay.setAttribute("title", "재생");
    musicPlay.setAttribute("class", "play");
    musicAudio.pause();
};

// 이전 곡 듣기
const prevMusic = () => {
    musicIndex == 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
};

// 다음 곡 듣기
const nextMusic = () => {
    musicIndex == allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
    
};
// 뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    const currentTime = e.target.currentTime;   // 재생시간
    const duration = e.target.duration; //전체 길이
    let propressWidth = (currentTime/duration) * 100;   //전체 길이에서 재생시간을 나누고 백분위로 나누면 몇 퍼센트 진행인지 알 수 있음 ㄷㄷ

    musicProgressBar.style.width = `${propressWidth}%`;

    // 전체 시간
    musicAudio.addEventListener("loadeddata", () => {
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = (Math.floor(audioDuration % 60)).toString().padStart(2, '0');
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // 진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60).toString().padStart(2, '0');
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;
});

// 진행 바 클릭
musicProgress.addEventListener("click", (e) => {
    let propressWidth = musicProgress.clientWidth;  //진행바 전체 길이
    let clickedOffsetX = e.offsetX; //진행바 기준 측정되는 X좌표 값
    let songDuration = musicAudio.duration; //오디오 전체 길이

    // 백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
    musicAudio.currentTime = (clickedOffsetX / propressWidth) * songDuration;
});

// 플레이 버튼 클릭
musicPlay.addEventListener("click", () => {
    const isMusicPaused = musicWrap.classList.contains("paused"); // paused 있는지 확인함
    isMusicPaused ? pauseMusic() : playMusic();
});

// 이전 곡 버튼 클릭
musicPrevBtn.addEventListener("click", () => {
    prevMusic();
});

// 다음 곡 버튼 클릭
musicNextBtn.addEventListener("click", () => {
    nextMusic();
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});