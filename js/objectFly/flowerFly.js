function flowerFly() {
    this.view = document.querySelector(".contain-tree-flower:nth-child(1)"); // Phần tử cha chứa đối tượng <img />
    this.typeObject = [
        "canh-hoa-dao1",
        "canh-hoa-dao2",
        "canh-hoa-dao3",
        "canh-hoa-dao4",
        "bong-hoa-dao1",
        "bong-hoa-dao2"
    ];
    // Phương thức chứa các lần random
    this.random = function(){
        this.i = Math.floor(Math.random()*6); // lấy ngẫu nhiên 1 số từ 0->5
        this.top = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Top ngẫu nhiên
        this.left = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Left ngẫu nhiên
        this.aTop = Math.ceil(Math.random()*6)/10; // Lẫy ngẫu nhiên một giá trị từ 0.1->0.5 làm gia tốc theo trục Y
        // Lấy ngẫu nhiên một số từ 0.1->0.5 làm gia tốc theo trục X 
        do {
            this.aLeft = Math.ceil(Math.random()*6)/10;
        } while(this.aLeft == this.aTop);
        // Phân loại kích cỡ của <img />
        // i=4 || 5 là bông hoa nên kích cỡ phải lớn hơn
        // còn lại là cánh hoa nên kích cỡ cũng phải nhỏ hơn
        if(this.i == 4 || this.i == 5) {
            this.width = 8;
            this.height = 8;
        } else {
            this.width = 4;
            this.height = 4;
        }
    };
}
flowerFly.prototype = new configFly();

function displayFlowerFly(){
    var listFlowerFly = [];
    var i = 0;
    setTimeout(function(){
        var interval = setInterval(function(){
            listFlowerFly[i] = new flowerFly();
            listFlowerFly[i].createObjectFly();
            ++i;
            if(i == 50)
                clearInterval(interval);
        }, 500);
    }, 2000);
}

displayFlowerFly();