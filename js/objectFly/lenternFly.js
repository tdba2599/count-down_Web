function lenternFly() {
    this.view = document.querySelector(".contain-tree-flower:nth-child(1)"); // Phần tử cha chứa đối tượng <img />
    this.typeObject = ["long-den2", "long-den3", "long-den4" ];
    this.zIndex = 4;
    this.random = function(){
        this.i = Math.floor(Math.random()*3); // lấy ngẫu nhiên 1 số từ 0->2
        this.top = - (Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5)); // Tạo ra vị trí Top ngẫu nhiên
        this.left = - (Math.floor(Math.random()*2)*100 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5)); // Tạo ra vị trí Left ngẫu nhiên
        this.aTop = Math.ceil(Math.random()*6)/10; // Lẫy ngẫu nhiên một giá trị từ 0.1->0.5 làm gia tốc theo trục Y
        // Lấy ngẫu nhiên một số từ 0.1->0.5 làm gia tốc theo trục X 
        // sao cho không được trùng với gia tốc theo trục X
        do {
            this.aLeft = Math.ceil(Math.random()*6)/10;
        } while(this.aLeft == this.aTop);
        // Phân loại kích cỡ của <img />
        switch(this.i){
            case 0:
                this.width = 10;
                this.height = 30;
            break;
            case 1:
                this.width = 15;
                this.height = 25;
            break;
            case 2:
                this.width = 10;
                this.height = 36;
            break;
        }
    };
}
lenternFly.prototype = new configFly();

function displayLenternFly() {
    var listFlowerFly = [];
    var i = 0;
    setTimeout(function(){
        var interval = setInterval(function(){
            listFlowerFly[i] = new lenternFly();
            listFlowerFly[i].createObjectFly ();
            ++i;
            if(i == 10)
                clearInterval(interval);
        }, 500);
    }, 2000);
}

// displayLenternFly();