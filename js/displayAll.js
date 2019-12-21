function displayAll(){
    this.treeFlower = document.getElementsByClassName("contain-tree-flower"); // Cây hoa đào và hoa mai
    this.imgFamily = document.getElementsByClassName("family"); // Hình cảnh gia đình
    this.listLentern_1 = document.querySelectorAll(".contain-tree-flower:nth-child(1) > .lentern"); // Các lồng đèn trên cây đào
    this.listLentern_2 = document.querySelectorAll(".contain-tree-flower:nth-child(2) > .lentern"); // Các lồng đèn trên cây mai
    this.number2020 = document.getElementsByClassName("number"); // Các chữ số trong 2020
    this.textTet = document.getElementsByClassName("textTet")[0]; // Không biết gọi thế nào :)
    this.slogan = document.getElementsByClassName("slogan")[0]; // Câu nói hay ho năm canh tý
    // this.iconSetting = document.getElementsByClassName("icon-setting")[0]; // icon setting
    // this.setting = document.getElementsByClassName("setting")[0]; // Bảng setting

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
    // Hiển thị hoa
    this.displayTreeFlower = function(){
        this.display(1000, 0, 1.5, [this.treeFlower[0]], "left", 0, "%");
        this.display(1000, 0, 1.5, [this.treeFlower[1]], "right", 0, "%");
    };
    // Hiển thị hình ảnh gia đình
    this.displayImgFamily = function(){
        setTimeout(()=>{
            this.imgFamily[0].style.opacity = "1";
            this.imgFamily[1].style.opacity = "1";
        }, 1500);
    };
    // Hiển thị lồng đèn
    this.displayLentern = function(){
        var i,j;
        i = j = 0;
            // Hiển thị lồng đèn trên cây đào
            var interval_1 = setInterval(()=>{
                this.listLentern_1[i].style.transform = "rotate(0deg)";
                ++i;
                if(i == 3)
                    clearInterval(interval_1);
            }, 1500);
            this.display(1000, 1000, 4, [this.listLentern_1[0]], "top", 4, "%");
            this.display(1000, 1000, 4, [this.listLentern_1[0]], "left", 43, "%");
            this.display(1000, 2000, 4, [this.listLentern_1[1]], "top", 50, "%");
            this.display(1000, 2000, 4, [this.listLentern_1[1]], "left", 52, "%");
            this.display(1000, 3000, 4, [this.listLentern_1[2]], "top", 38, "%");
            this.display(1000, 3000, 4, [this.listLentern_1[2]], "left", 18, "%");
            // Hiển thị lồng đèn trên cây mai
            var interval_2 = setInterval(()=>{
                this.listLentern_2[j].style.transform = "rotate(0deg)";
                ++j;
                if(j == 3)
                    clearInterval(interval_2);
            }, 1500);
            this.display(1000, 1000, 8, [this.listLentern_2[0]], "top", 38, "%");
            this.display(1000, 1000, 8, [this.listLentern_2[0]], "left", 41.5, "%");
            this.display(1000, 2000, 8, [this.listLentern_2[1]], "top", 51, "%");
            this.display(1000, 2000, 8, [this.listLentern_2[1]], "left", 10, "%");
            this.display(1000, 3000, 6, [this.listLentern_2[2]], "top", 5, "%");
            this.display(1000, 3000, 6, [this.listLentern_2[2]], "left", 18, "%");
    }
    // Hiển thị chữ TẾT
    this.displayTextTet = function(){
        this.display(1200, 0, 2, [this.textTet], "top", -7, "%");
    }
    // Hiển thị các chữ số trong 2020
    this.displayNumber2020 = function() {
        this.display(1200, 200, 2, this.number2020, "top", -8, "%");
    }
    // Hiển thị câu slogan tết 2020
    this.displaySlogan = function(){
        this.display(2000, 0, 2, [this.slogan], "top", -10, "%");
    }
}


// Khởi chạy các phương thức
var display = new displayAll();
display.displayTreeFlower();
display.displayImgFamily();
display.displayLentern();
display.displayTextTet();
display.displayNumber2020();
display.displaySlogan();
display.displaySetting();