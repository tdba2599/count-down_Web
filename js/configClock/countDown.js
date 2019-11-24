/****************************************************************************************/
/*-----------Tạo đối danh sách số và hiển thị số truyền vào bất kỳ---------------------*/
/**************************************************************************************/

var countDown = function(){
    // Đối tượng danh sách số từ 0-9
    this.createListNumber = function(){
        this.ul = document.createElement("ul");
        this.elementLi = [];
        this.char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        // Tạo các li mang giá trị cho li từ 0-9, từ A-Z và khoảng trắng
        this.createLi = function(view){
            for(var i=0; i<=9 ; i++) {
                this.elementLi[i] = document.createElement("li");
                this.elementLi[i].innerHTML = i;
                this.ul.appendChild(this.elementLi[i]);
            }
            for(var j = 0; j < this.char.length; j++){
                this.elementLi[i+j] = document.createElement("li");
                this.elementLi[i+j].innerHTML = this.char[j];
                this.ul.appendChild(this.elementLi[i+j]); 
            }
            view.appendChild(this.ul);
        }
    };
    // Hiển thị số trong danh sách từ 0-9
    this.displayNumber = function(elementTime, value) {
        elementTime.ul.style.top = -100*value + "%"; // Thiết lập hiển thị số theo giá trị đưa vào "value"
    }
}
