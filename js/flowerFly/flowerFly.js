function flowerFly() {
    this.flower;
    this.width;
    this.height;
    this.top = -100;
    this.left = -100;
    this.aTop;
    this.aLeft;
    this.view = document.querySelector(".contain-tree-flower:nth-child(1)");
    this.typeFlower = [
        "canh-hoa-dao1",
        "canh-hoa-dao2",
        "canh-hoa-dao3",
        "canh-hoa-dao4",
        "bong-hoa-dao1",
        "bong-hoa-dao2"
    ];
    this.typeFlieImg = ".png";
    this.n = 15; // Tổng số lượng các cánh hoa và bông hoa đang bay.
    this.i;
    this.p;

    this.random = function(){
        this.i = Math.floor(Math.random()*6); // lấy ngẫu nhiên 1 số từ 0->5 và dùng số đó để lấy ra một typeFlower bất kỳ
        this.p = Math.floor(Math.random()*10)*10; //
        this.aTop = Math.ceil(Math.random()*5); //
        do {
            this.aLeft = Math.ceil(Math.random()*5);
        } while(this.aLeft == this.aTop); //
        if(this.i == 4 || this.i == 5) {
            this.width = 5;
            this.height = 5;
        } else {
            this.width = 3.5;
            this.height = 3.5;
        }
    };
    // Tạo các dối tượng cánh hoa và bông hoa
    this.createFlowerFly = function(){
        this.random();
        this.flower = document.createElement("img");
        this.flower.src = "imgs/"+this.typeFlower[this.i]+this.typeFlieImg;
        this.flower.style.width = this.width + "%";
        this.flower.style.height = this.height + "%";
        this.flower.style.top = this.top + "px";
        this.flower.style.left = this.left + "px";
        this.flower.style.position = "absolute";
        // this.flower.style.border = "1px solid black";
        this.view.appendChild(this.flower);
        setTimeout(() => {
            this.actionFly();
        }, 1000);
    };

    this.actionFly = function(){
        var interval = setInterval(() => {
            this.top += this.aTop;
            this.left += this.aLeft;
            this.flower.style.top = this.top + "px";
            this.flower.style.left = this.left + "px";
            if(this.left >=window.screen.availWidth || this.top >= window.screen.availHeight) {
                console.log("Xin chào !");
                clearInterval(interval);
                this.view.removeChild(this.flower);
                this.top = -100;
                this.left = -100;
                this.createFlowerFly();
            }
        }, 20);
    }
}

var listFlowerFly = [];
for(var i=0; i<100; i++) {
    listFlowerFly[i] = new flowerFly();
    listFlowerFly[i].createFlowerFly();
}