function flowerFly() {
    this.flower; // Đối tượng <img /> dùng để hiển thị hoa hoặc cánh hoa
    this.view = document.querySelector(".contain-tree-flower:nth-child(1)"); // Phần tử cha chứa đối tượng <img />
    this.width; // Chiều rộng của <img />
    this.height; // Chiều cao của <img />
    this.top; // Vị trí top ban đầu của <img /> so với phần tử cha chứa nó
    this.left; // Vị trí left ban đầu của <img /> so với phần tử cha chứa nó
    this.aTop; // Gia tốc của <img /> theo trục Y
    this.aLeft; // Gia tốc của <img /> theo trục X
    // Mảng chứa các kiểu hoa: 0->3 là cánh hoa, từ 4-> là bông hoa
    this.typeFlower = [
        "canh-hoa-dao1",
        "canh-hoa-dao2",
        "canh-hoa-dao3",
        "canh-hoa-dao4",
        "bong-hoa-dao1",
        "bong-hoa-dao2"
    ];
    this.typeFlieImg = ".png"; // Kiểu của file ảnh mà <img /> hiển thị
    this.n = 15; // Tổng số lượng các cánh hoa và bông hoa đang bay.
    this.i; // Lưu một số ngẫu nhiên để lấy ra ngẫu nhiên một kiểu hoa trong mảng typeFlower
    this.p; 
    // Phương thức chứa các lần random
    this.random = function(){
        this.i = Math.floor(Math.random()*6); // lấy ngẫu nhiên 1 số từ 0->5
        this.p = Math.floor(Math.random()*10)*10; //
        this.top = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Top ngẫu nhiên
        this.left = Math.floor(Math.random()*2)*100 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Left ngẫu nhiên
        this.aTop = Math.ceil(Math.random()*6)/10; // Lẫy ngẫu nhiên một giá trị từ 0.1->0.5 làm gia tốc theo trục Y
        // Lấy ngẫu nhiên một số từ 0.1->0.5 làm gia tốc theo trục X 
        // sao cho không được trùng với gia tốc theo trục X
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
            this.width = 5;
            this.height = 5;
        }
    };
    // Tạo các đối tượng cánh hoa và bông hoa
    this.createFlowerFly = function(){
        this.random();
        this.flower = document.createElement("img");
        this.flower.src = "imgs/"+this.typeFlower[this.i]+this.typeFlieImg;
        this.flower.style.width = this.width + "%";
        this.flower.style.height = this.height + "%";
        this.flower.style.top = this.top + "px";
        this.flower.style.left = this.left + "px";
        this.flower.style.position = "absolute";
        this.flower.style.zIndex = "2";
        // this.flower.style.border = "1px solid black";
        this.view.appendChild(this.flower);
        this.actionFly();
    };
    // Tạo hành động di chuyển cho đối tượng <img />
    this.actionFly = function(){
        var interval = setInterval(() => {
            this.top += this.aTop; 
            this.left += this.aLeft;
            this.flower.style.top = this.top + "px";
            this.flower.style.left = this.left + "px";
            // Kiểm tra xem đối tượng đã di chuyển vượt quá khung nhìn của trình duyệt chưa
            // nếu đã vượt qua thì xóa hành động interval và xóa đối tượng đi
            // set lại vị trí ban đầu cho đối tượng mới và tạo đối tượng mới
            if(this.left >=window.screen.availWidth || this.top >= window.screen.availHeight) {
                clearInterval(interval);
                this.view.removeChild(this.flower);
                this.top = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Top ngẫu nhiên
                this.left = Math.floor(Math.random()*2)*100 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Left ngẫu nhiên
                setTimeout(()=>{
                    this.createFlowerFly();
                }, 1000);
            }
        }, 10);
    }
}

var listFlowerFly = [];
var i = 0;
setTimeout(function(){
    var interval = setInterval(function(){
        listFlowerFly[i] = new flowerFly();
        listFlowerFly[i].createFlowerFly();
        ++i;
        if(i == 50)
            clearInterval(interval);
    }, 500);
}, 2000);