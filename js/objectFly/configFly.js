function configFly() {
    this.objectFly; // Đối tượng <img /> dùng để hiển thị hoa hoặc cánh hoa
    this.view; // Phần tử cha chứa đối tượng <img />
    this.width = 10; // Chiều rộng của <img />
    this.height = 10; // Chiều cao của <img />
    this.top =  Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Vị trí top ban đầu của <img /> so với phần tử cha chứa nó
    this.left = Math.floor(Math.random()*2)*100 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Vị trí left ban đầu của <img /> so với phần tử cha chứa nó
    this.aTop = Math.ceil(Math.random()*6)/10; // Gia tốc của <img /> theo trục Y
    this.aLeft = Math.ceil(Math.random()*6)/10; // Gia tốc của <img /> theo trục X
    this.zIndex = 2;
    this.typeObject = [];
    this.typeFlieImg = ".png"; // Kiểu của file ảnh mà <img /> hiển thị
    this.i = Math.floor(Math.random()*6);; // Lưu một số ngẫu nhiên để lấy ra ngẫu nhiên một kiểu hoa trong mảng typeFlower
    // Phương thức chứa các lần random
    this.random = function(){
        alert("Bạn chưa định nghĩa lại phương thức \"random()\" !");
    };
    // Tạo các đối tượng cánh hoa và bông hoa
    this.createObjectFly = function(){
        this.random();
        this.objectFly = document.createElement("img");
        this.objectFly.src = "imgs/"+this.typeObject[this.i]+this.typeFlieImg;
        this.objectFly.style.width = this.width + "%";
        this.objectFly.style.height = this.height + "%";
        this.objectFly.style.top = this.top + "px";
        this.objectFly.style.left = this.left + "px";
        this.objectFly.style.position = "absolute";
        this.objectFly.style.zIndex = this.zIndex;
        this.view.appendChild(this.objectFly);
        this.actionFly();
    };
    // Tạo hành động di chuyển cho đối tượng <img />
    this.actionFly = function(){
        var interval = setInterval(() => {
            this.top += this.aTop; 
            this.left += this.aLeft;
            this.objectFly.style.top = this.top + "px";
            this.objectFly.style.left = this.left + "px";
            // Kiểm tra xem đối tượng đã di chuyển vượt quá khung nhìn của trình duyệt chưa
            // nếu đã vượt qua thì xóa hành động interval và xóa đối tượng đi
            // set lại vị trí ban đầu cho đối tượng mới và tạo đối tượng mới
            if(this.left >= window.screen.availWidth || this.top >= window.screen.availHeight) {
                clearInterval(interval);
                this.view.removeChild(this.objectFly);
                this.top = Math.floor(Math.random()*2)*100 + 30 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Top ngẫu nhiên
                this.left = Math.floor(Math.random()*2)*100 + Math.floor(Math.random()*10)*Math.floor(Math.random()*5); // Tạo ra vị trí Left ngẫu nhiên
                setTimeout(()=>{
                    this.createObjectFly();
                }, 1000);
            }
        }, 10);
    }
}