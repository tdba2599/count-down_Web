function animationClock(){
    this.clock = document.getElementsByClassName("clock")[0]; // Container clock
    this.elementTime = document.getElementsByClassName("element-time"); // Các đối tượng element-time dùng để hiển thị phần tử time
    this.timeName = document.querySelectorAll(".clock .viewTime .time-remain > p"); // Tên của các thành phần thời gian
    this.haiCham = document.querySelectorAll(".clock .viewTime .hai-cham > p");
    this.i = 0; // Biến trung gian
    this.j = 0; // Biến trung gian
    // Hàm hiển thị các phần tử với giá trị Top, thời gian bắt đầu, thời gian lặp qua từng phần tử,
    // mảng phần tử, giá trị Top, đơn vị đo của giá trị Top
    this.display = function(delayTime, repeatTime, arrayElement, top, typeValue) {
        setTimeout(function(){
            var i = 0;
            var interval = setInterval(function(){
                if(i < arrayElement.length) {
                    setTimeout(()=>{
                        arrayElement[i].style.top = top + typeValue;
                        ++i;
                    },80);
                } else {
                    i = 0;
                    clearInterval(interval);
                }
            },repeatTime);
        }, delayTime);
    };
    // Hiển thị khung clock
    this.displayClock = function(){
        setTimeout(()=>{
            this.clock.style.opacity = "1";
            this.clock.style.width = "70%";
            this.clock.style.transition = "0.5s";
            setTimeout(()=>{
                this.clock.style.height = "320px";
            }, 300);
        }, 500);
    };
    // Hiển thị các phần tử thời gian
    this.displayElementTime = function(){
        this.display(800, 100, this.elementTime, 0, "px");
    };
    // Hiển thị name time
    this.displayTimeName = function(){
        this.display(800, 100, this.timeName, -25, "%");
    };
    this.displayHaiCham = function(){
        this.display(800, 100, this.haiCham, 0, "%");
    };
}


// Khởi chạy các hàm
var animationClock = new animationClock();
animationClock.displayClock();
animationClock.displayElementTime();
animationClock.displayTimeName();
animationClock.displayHaiCham();
