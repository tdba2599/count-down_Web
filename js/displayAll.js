function displayAll(){
    this.treeFlower = document.getElementsByClassName("contain-tree-flower"); // Cây hoa đào vào hoa mai
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
    }
}


// Khởi chạy các phương thức
var display = new displayAll();
display.displayTreeFlower();
