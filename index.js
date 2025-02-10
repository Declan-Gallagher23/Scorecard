let home_count = document.getElementById("home-counter")
let guest_count = document.getElementById("guest-counter")

let homeScore = parseInt(home_count.textContent);
let guestScore = parseInt(guest_count.textContent);
console.log(homeScore)
if (homeScore > guestScore) {
    home_count.style.color = "green";
}

count = 0
guest_counter = 0

function home1() {
    count += 1
    home_count.innerText = count
}

function home2() {
    count += 2
    home_count.innerText = count

}

function home3() {
    count += 3
    home_count.innerText = count
    
}

function guest1() {
    guest_counter += 1
    guest_count.innerText = guest_counter
}

function guest2() {
    guest_counter += 2
    guest_count.innerText = guest_counter
}

function guest3() {
    guest_counter += 3
    guest_count.innerText = guest_counter
}

function reset() { 
    home_count.innerText = 0 
    guest_count.innerText = 0
}