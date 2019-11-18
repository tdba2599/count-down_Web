function displayAll(){
    this.treeFlower = document.getElementsByClassName("contain-tree-flower"); // Cây hoa đào và hoa mai
    this.imgFamily = document.getElementsByClassName("family"); // Hình cảnh gia đình
    this.listLentern_1 = document.querySelectorAll(".contain-tree-flower:nth-child(1) > .lentern");
    this.listLentern_2 = document.querySelectorAll(".contain-tree-flower:nth-child(2) > .lentern");
    this.floweFly = [] // Mảng chứa các đối tượng cánh hoa, các bông hoa sử dụng để tạo hiệu ứng bay
    
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
        var j = [this.treeFlower[0]];
        this.display(1000, 0, 1.5, j, "left", 0, "%");
        j = [this.treeFlower[1]];
        this.display(1000, 0, 1.5, j, "right", 0, "%");
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
        setTimeout(()=>{
            var interval_1 = setInterval(()=>{
                switch(i) {
                    case 0:
                        this.listLentern_1[i].style.top = "4%";
                        this.listLentern_1[i].style.left = "43%";
                    break;
                    case 1:
                        this.listLentern_1[i].style.top = "50%";
                        this.listLentern_1[i].style.left = "52%";
                    break;
                    case 2:
                        this.listLentern_1[i].style.top = "38%";
                        this.listLentern_1[i].style.left = "18%";
                    break;
                } 
                this.listLentern_1[i].style.transform = "rotate(0deg)";
                ++i;
                if(i == 3)
                    clearInterval(interval_1);
            }, 1000);
            var interval_2 = setInterval(()=>{
                switch(j) {
                    case 0:
                        this.listLentern_2[j].style.top = "38%";
                        this.listLentern_2[j].style.left = "41.5%";
                    break;
                    case 1:
                        this.listLentern_2[j].style.top = "51%";
                        this.listLentern_2[j].style.left = "10%";
                    break;
                    case 2:
                        this.listLentern_2[j].style.top = "5%";
                        this.listLentern_2[j].style.left = "18%";
                    break;
                } 
                this.listLentern_2[j].style.transform = "rotate(0deg)";
                ++j;
                if(j == 3)
                    clearInterval(interval_2);
            }, 1000);
        }, 1000);
    }
}


// Khởi chạy các phương thức
var display = new displayAll();
display.displayTreeFlower();
display.displayImgFamily();
display.displayLentern();
