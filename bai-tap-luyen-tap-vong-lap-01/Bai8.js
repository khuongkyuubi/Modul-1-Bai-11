function playGame() {
    let bound = 0;
    let random = 0;
    let guestNumber = 0;
    do {
        bound = prompt("Nhập vào khoảng muốn đoán: ")
        // console.log(bound);
        if (bound === null) {
            alert("Bạn đã bỏ cuộc chơi!");
            return;
            // break;
        }
        bound = parseInt(bound);
    } while (isNaN(bound));

    console.log(bound);
    random = (Math.random() * bound);
    random = Math.floor(random);
    console.log(random);


    let guest = function () {
        do {
            guestNumber = prompt("Nhập vào số đoán: ")
            console.log(guestNumber);
            if (guestNumber === null) {
                // alert("Bạn đã bỏ một lượt chơi!");
                // break ;
                return;
            }
            guestNumber = parseInt(guestNumber);
        } while (isNaN(guestNumber));
    }

    console.log(guestNumber);

    guest();
    for (let i = 0; i < 2; i++) {
        if (guestNumber === random) {
            break;
        } else if (guestNumber > random) {
            alert("Số bạn đoán đang lớn hơn số may mắn");
            guest();
        } else if (guestNumber == null) {
            alert("Bạn đã bỏ 1 lượt chơi");
            guest();
        } else {
            alert("Số bạn đoán đang nhỏ hơn số may mắn");
            guest();
        }
    }

    if (guestNumber === random) {
        alert("Chúc mừng bạn đã đoán đúng")
    } else {
        alert("Bạn đã hết lượt đoán");
    }
}