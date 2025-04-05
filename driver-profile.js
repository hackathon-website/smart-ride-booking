document.addEventListener("DOMContentLoaded", () => {
    const driver = JSON.parse(localStorage.getItem("loggedDriver"));
    const rides = JSON.parse(localStorage.getItem("rideHistory")) || [];

    if (driver) {
        document.getElementById("driverInfo").innerHTML = `
            <p><strong>Name:</strong> ${driver.name}</p>
            <p><strong>Age:</strong> ${driver.age}</p>
            <p><strong>Car:</strong> ${driver.car}</p>
            <p><strong>ID:</strong> ${driver.id}</p>
        `;
    }

    const rideList = document.getElementById("rideList");
    let totalRating = 0;
    let count = 0;

    rides.forEach((ride, i) => {
        const rating = Math.floor(Math.random() * 5) + 1;
        totalRating += rating;
        count++;

        const item = document.createElement("li");
        item.innerHTML = `
            Ride ${i + 1}: ${ride.pickup} to ${ride.drop} on ${ride.date}
            <br/>Rating: ${"⭐".repeat(rating)}
        `;
        rideList.appendChild(item);
    });

    if (count > 0) {
        const avgRating = (totalRating / count).toFixed(1);
        const ratingDisplay = document.createElement("p");
        ratingDisplay.innerHTML = "<strong>Average Rating:</strong> ${avgRating} / 5";
        document.body.appendChild(ratingDisplay);
    }
});