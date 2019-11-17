function displayAll(){
    this.clock = document.getElementsByClassName("clock")[0]; // Container clock
    this.elementTime = document.getElementsByClassName("element-time"); // Các đối tượng element-time dùng để hiển thị phần tử time
    this.timeName = document.querySelectorAll(".clock .viewTime .time-remain > p"); // Tên của các thành phần thời gian
    this.haiCham = document.querySelectorAll(".clock .viewTime .hai-cham > p"); // Dấu hai chấm ngăn cách
    this.flower = document.getElementsByClassName("flower"); // Hoa đào vào hoa mai
    // Hàm hiển thị các phần tử với giá trị Top, thời gian bắt đầu, thời gian lặp qua từng phần tử,
    // mảng phần tử, loại vị trí, giá trị, đơn vị đo của giá trị Top
    this.display = function(delayTime, repeatTime, transition, arrayElement, position, value, typeValue) {
        setTimeout(function(){
            var i = 0;
            var interval = setInterval(function(){
                if(i < arrayElement.length) {
                    setTimeout(()=>{
                        switch(position) {
                            case "top":
                                arrayElement[i].style.top = value + typeValue;
                            break;
                            case "left":
                                arrayElement[i].style.left = value + typeValue;
                            break;
                            case "right":
                                arrayElement[i].style.right = value + typeValue;
                            break;
                            case "bottom":
                                arrayElement[i].style.bottom = value + typeValue;
                            break;   
                        }
                        arrayElement[i].style.opacity = "1";
                        arrayElement[i].style.transition = transition + "s";
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
    // Hiển thị hoa
    this.displayFlower = function(){
        var j = [this.flower[0]];
        this.display(1000, 0, 1.5, j, "left", 0, "%");
        j = [this.flower[1]];
        this.display(1000, 0, 1.5, j, "right", 0, "%");
    }
}


// Khởi chạy các hàm
var display = new displayAll();
display.displayClock();
display.displayElementTime();
display.displayTimeName();
display.displayHaiCham();
display.displayFlower();
