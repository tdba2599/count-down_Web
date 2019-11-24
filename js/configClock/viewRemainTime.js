/*****************************************************************************************************/
/*----------------------Chịu trách nhiệm chính là cập nhật thời gian rồi thay đổi hiển thị----------*/
/*----------------------danh sách số từ 0-9 cho từng view phần tử thời gian sao cho đúng nhất------*/
/**************************************************************************************************/
var viewRemainTime = function(){
    this.objRemainTime = new remainTime(2020, 1, 25, 00, 00, 00, 000); // Lấy ra mảng chứa các thành phần time còn lại
    this.remainTime = []; // Chứa mảng các thành phần thời gian trong thời gian còn lại
    this.listNumberOfViewElementTime = []; // Mảng các danh sách số từ 0-9 trong các view hiển thị phần tử thời gian
    this.viewElementTime = document.getElementsByClassName("element-time"); // Mảng chứa các view phần từ thời gian
    this.elementTime = []; // Mảng lưu từng phần tử thời gian
    this.x = null; // Biến trung gian
    
    // Khởi tạo danh sách số từ 0-9 rồi add vào các view phần tử
    this.addListNumberForElementTime = function() {
        for(var i=0; i<this.viewElementTime.length; i++) {
            this.listNumberOfViewElementTime[i] = new this.createListNumber(); // Tạo đối tượng danh sách số
            this.listNumberOfViewElementTime[i].createLi(this.viewElementTime[i]); // Tạo danh sách số từ 0-9 rồi thêm vào view phần tử
        }       
    };

    // Cập nhật các phần tử thời gian vào các view hiển thị phần tử thời gian
    this.updateChangeRemainTime = function() {
        this.addListNumberForElementTime(); 
        var interval = setInterval(()=>{
            this.remainTime = this.objRemainTime.getRemainTime(); // Lấy ra mảng chứa các thành phần thời gian
            if(this.remainTime != "NEW_YEAR") {
                this.remainTime.forEach((value, index)=>{
                    value = value.toString(); // Ép sang chuỗi
                    value = value.split(""); // Ép sang mảng
                    // Với các thành phần time chỉ có 1 chữ số thì thêm 0 vào đằng trước
                    if(value.length == 1)
                        value.unshift("0");
                    // Cập nhật lại giá trị mới là một mảng chứa các phần tử thời gian 
                    //vào vị trí của thành phần thời gian ban của nó 
                    //( thành phần thời gian được tách thành các phần tử thời gian) 
                    this.remainTime[index] = value;
                })
                
                // Nối các mảng chứa phần tử thời gian thành một mảng mới
                // với giá trị lần lượt là các phần tử thời gian
                this.remainTime.forEach((value)=>{
                    this.elementTime = this.elementTime.concat(value);
                });
                // Cập nhật lại hiển thị cho đúng với giá trị của từng phần tử thời gian
                this.elementTime.forEach((value, index)=>{
                    this.displayNumber(this.listNumberOfViewElementTime[index], value);
                })
                // Cập nhật lại mảng chứa các phần tử thời gian thành một mảng rỗng
                // để chuẩn bị cho quá trình cập nhật mới tiếp theo
                this.elementTime = [];
            } else {
                document.querySelector(".clock .viewTime .time-remain:first-child").style.marginRight = "3px";
                var haiCham = document.querySelectorAll(".clock .viewTime .hai-cham > p");
                for(this.x =0; this.x <  haiCham.length; this.x++) {
                    haiCham[this.x].innerHTML = "";
                    haiCham[this.x].style.width = "3px";
                }
                this.x = 0;
                clearInterval(interval);
                setInterval(()=>{
                    switch(this.x){
                        // Hiển thị chữ Happy
                        case 0:
                            this.elementTime = [17, 10, 25, 25, 34, 36, 36, 36];
                            ++this.x;
                        break;
                        // Hiển thị chữ New
                        case 1:
                            this.elementTime = [23, 14, 32, 36, 36, 36, 36, 36];
                            ++this.x;
                        break;
                        // Hiển thị chữ Year
                        case 2:
                            this.elementTime = [34, 14, 10, 27, 36, 36, 36, 36];
                            ++this.x;
                        break;
                        // Hiển thị dãy số 2020
                        case 3:
                            this.elementTime = [2, 0, 2, 0 ,36 ,36, 36, 36];
                            this.x = 0;
                        break;
                    }
                    this.elementTime.forEach((value, index)=>{
                        this.displayNumber(this.listNumberOfViewElementTime[index], value);
                    })
                }, 1500);
            }
        }, 1000);
    };
    
};

viewRemainTime.prototype = new countDown(); // viewRemain kế thừa các phương thức của đối tượng countDown
var happyNewYear = new viewRemainTime();
happyNewYear.updateChangeRemainTime(); // Start
