var john = {
    fullName : "mazhar khan",
    bills : [11, 11, 11, 11, 11],
    calculateTip: function() {
        this.tips =[];
        this.finalValues= [];
        for (let i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if(bill < 50) {
                percentage = .2;
            } else if(bill >= 50 && bill < 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
john.calculateTip();

var mark = {
    fullName : "Mark Manson",
    bills : [11, 11, 11, 11],
    calculateTip : function() {
        this.tips =[];
        this.finalValues= [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if(bill < 100) {
                percentage = .2;
            } else if(bill >= 100 && bill < 300) {
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
mark.calculateTip();

//Function to calculate tips average
function calculateAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

var johnAvg = calculateAvg(john.tips);
var markAvg = calculateAvg(mark.tips);

if(johnAvg > markAvg) {
    console.log(john.fullName + " family's paid the highest average tips.");
} else if(johnAvg < markAvg) {
    console.group(mark.fullName + " family's paid the highest average tips");
} else {
    console.log("Both families paid the same average tips.");
}
