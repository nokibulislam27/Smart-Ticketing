let seatCount = 1;
let selectCount = 1;
let totalPrice = 550;

const seats = document.getElementsByClassName('seats');
for (const seat of seats) {

    // seat selection functionality
    seat.addEventListener('click', function addSeat() {
        if (selectCount <= 4) {

            // adding background color to each selected seat
            seat.classList.remove('bg-slate-100');
            seat.classList.add('text-white') ;
            seat.classList.add('bg-[#1dd100]');

            // appending a selected seat-info to the seat-info-container
            const seatName = seat.innerText;
            const seatInfoContainer = document.getElementById('seat-info');
            const span = document.createElement('span');
            span.classList.add('flex');
            span.classList.add('justify-between')
            span.innerHTML = `<p id="seat-name">${seatName}</p> <p>Business Class</p> <p>550</p>`;
            seatInfoContainer.appendChild(span);

            // updating total price after selecting a seat
            setValueByElementId('total-price', totalPrice);

            // updating grand total price after selecting a seat
            setValueByElementId('grand-total', totalPrice);

            // updating seat counts after selecting a seat
            setValueByElementId('seat-count', seatCount);

            // updating available seats number after selecting a seat
            const availableSeats = getValueByElementId('available-seats');
            const updatedAvailableSeats = availableSeats - 1;
            setValueByElementId('available-seats', updatedAvailableSeats);

            // removing click event for the selected seat 
            seat.removeEventListener('click', addSeat);
        }
        else{
            return alert('You cannot purchase more than 4 tickets at a time');
        }
        if(selectCount === 4){

            // Apply button will only be enabled if 4 seats are selected
            document.getElementById('btn-apply').removeAttribute('disabled');
        }
        selectCount++;
        totalPrice = totalPrice + 550;
        seatCount++;
    })
}

// button apply functionality with coupon validation
document.getElementById('btn-apply').addEventListener('click', function(){
    const totalPrice = getValueByElementId('total-price');
    const discountElement = document.getElementById('discount');
    let discount = 0;
    const couponApply = document.getElementById("coupon-apply");
    const couponField = document.getElementById('coupon');
    const coupon = couponField.value;
    if(coupon === 'NEW15'){
        discount = totalPrice * .15
        discountElement.innerHTML = `<p>Discount Price</p> <p>BDT ${discount}</p>`;
        couponApply.classList.add('hidden');
    }
    else if(coupon === 'Couple 20'){
        discount = totalPrice * .2;
        discountElement.innerHTML = `<p>Discount Price</p> <p>BDT ${discount}</p>`;
        couponApply.classList.add('hidden');
    }
    else{
        alert('Invalid Coupon');
        couponField.value = '';
    }
    setValueByElementId('grand-total', totalPrice-discount);
})

// Next button will be enabled if at least a seat is selected and the length of phone number input field will be greater than 0.
document.getElementById('phone').addEventListener('input', function(event){
    const phoneNumber = parseInt(event.target.value);
    const seatName = document.getElementById('seat-name').innerText;
    const seatNumber = getSeatNumberByElementId(seatName);
    if(seatNumber.classList.contains('bg-[#1dd100]') && phoneNumber > 0){
        document.getElementById('btn-next').removeAttribute('disabled');
    }
})