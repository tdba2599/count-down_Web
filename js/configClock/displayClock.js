function displayClock(){
    this.clock = document.getElementsByClassName("clock")[0]; // Khung của clock
    this.elementTime = document.getElementsByClassName("element-time"); // Các đối tượng element-time dùng để hiển thị phần tử time
    this.timeName = document.querySelectorAll(".clock .viewTime .time-remain > p"); // Tên của các thành phần thời gian
    this.haiCham = document.querySelectorAll(".clock .viewTime .hai-cham > p"); // Dấu hai chấm
    this.i = 0; // Biến trung gian
    this.j = 0; // Biến trung gian

    // Hiển thị khung clock
    this.displayContainClock = function(){
        setTimeout(()=>{
            // this.clock.style.opacity = "1";
            this.clock.style.width = "50%";
            this.clock.style.transition = "1s";
            setTimeout(()=>{
                this.clock.style.height = "220px";
            }, 300);
        }, 500);
    };
    // Hiển thị các phần tử thời gian
    this.displayElementTime = function(){
        this.display(800, 100, 1, this.elementTime, "top", 0, "px");
    };
    // Hiển thị name time
    this.displayTimeName = function(){
        this.display(1000, 200, 1, this.timeName, "top", -30, "%");
    };
    // Hiển thị dấu hai chấm ":"
    this.displayHaiCham = function(){
        this.display(1000, 200, 1, this.haiCham, "top", 0, "%");
    };
}

displayClock.prototype = new displayAll(); // Kế thừa hàm khởi tạo displayAll để sử dụng phương thức display
// Khởi chạy các hàm
var displayClock = new displayClock();
displayClock.displayContainClock();
displayClock.displayElementTime();
displayClock.displayTimeName();
displayClock.displayHaiCham();
