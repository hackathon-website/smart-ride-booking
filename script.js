document.addEventListener("DOMContentLoaded", function () {
    const rideForm = document.getElementById("rideForm");
    const rebook = JSON.parse(localStorage.getItem("rebookRide"));
if (rebook) {
    document.getElementById("pickup").value = rebook.pickup;
    document.getElementById("drop").value = rebook.drop;
    document.getElementById("rideType").value = rebook.rideType;
    localStorage.removeItem("rebookRide");
}

    if (rideForm) {
        rideForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const pickup = document.getElementById("pickup").value.trim();
            const drop = document.getElementById("drop").value.trim();
            const payment = document.getElementById("payment").value;

            if (!pickup || !drop) {
                alert("Please fill out all fields.");
                return;
            }

            const ride = {
                pickup,
                drop,
                payment,
                date: new Date().toLocaleString()
            };

            // Save ride to localStorage
            const rideHistory = JSON.parse(localStorage.getItem("rideHistory")) || [];
            rideHistory.push(ride);
            localStorage.setItem("rideHistory", JSON.stringify(rideHistory));

            alert("Ride booked successfully!");
            rideForm.reset();
        });
    }

    // Pre-fill ride form if rebooking
    const currentBooking = JSON.parse(localStorage.getItem("currentBooking"));
    if (currentBooking) {
        if (document.getElementById("pickup")) {
            document.getElementById("pickup").value = currentBooking.pickup;
        }
        if (document.getElementById("drop")) {
            document.getElementById("drop").value = currentBooking.drop;
        }
        if (document.getElementById("payment")) {
            document.getElementById("payment").value = currentBooking.payment;
        }
        localStorage.removeItem("currentBooking");
    }
});