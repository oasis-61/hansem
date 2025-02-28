

let isKorean = false; 
function toggleLanguage() { 
    const engElements = document.querySelectorAll('.title-eng'); 
    const korElements = document.querySelectorAll('.title-kor'); 

    // const engElements = document.querySelectorAll('.nav-eng, .title-eng'); 
    // const korElements = document.querySelectorAll('.nav-kor, .title-kor');

    const button = document.getElementById("toggleButton"); 
    if (isKorean) { 
        engElements.forEach(el => el.classList.add('active')); 
        korElements.forEach(el => el.classList.remove('active')); 
        button.textContent = "KOR"; 
    } else { 
        engElements.forEach(el => el.classList.remove('active')); 
        korElements.forEach(el => el.classList.add('active')); 
        button.textContent = "ENG"; 
    } 
    isKorean = !isKorean; 
}








$(document).ready(function() {
    $("#logo").on("touchstart", function() {
        $(this).addClass("active");
    });

    $("#logo").on("touchend", function() { $(this).removeClass("active"); });
});

$(document).ready(function() {
    $("#navPortfolio").on("touchstart", function() {
        $(this).addClass("active");
    });

    $("#navPortfolio").on("touchend", function() { $(this).removeClass("active"); });
});

$(document).ready(function() {
    $("#navCv").on("touchstart", function() {
        $(this).addClass("active");
    });

    $("#navCv").on("touchend", function() { $(this).removeClass("active"); });
});



function updateTime() {
    const currentTime = new Date();
    
   
    const year = currentTime.getFullYear();
    const month = String(currentTime.getMonth() + 1).padStart(2, '0'); // 월은 0부터니까.... +1
    const day = String(currentTime.getDate()).padStart(2, '0');
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    
    document.getElementById('currentTime').textContent = formattedTime;
}

// 1초마다 시간 업데이트
setInterval(updateTime, 1000);

// 페이지 로드 시 시간 즉시 업데이트
updateTime();




