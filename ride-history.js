document.addEventListener("DOMContentLoaded", () => {
    const history = JSON.parse(localStorage.getItem("rideHistory")) || [];
    const list = document.getElementById("historyList");

    if (history.length === 0) {
        list.innerHTML = "<p>No previous rides found.</p>";
        return;
    }

    history.forEach((ride, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
            <strong>From:</strong> ${ride.pickup} <br/>
            <strong>To:</strong> ${ride.drop} <br/>
            <strong>Type:</strong> ${ride.rideType} <br/>
            <strong>Date:</strong> ${ride.date}<br/>
            <strong>Rating:</strong>
            <select data-index="${index}" class="rating">
                <option value="">Rate</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
            <button onclick="rebookRide(${index})">Rebook</button>
        `;
        list.appendChild(item);
    });

    document.querySelectorAll(".rating").forEach(select => {
        select.addEventListener("change", function () {
            const index = this.getAttribute("data-index");
            history[index].userRating = this.value;
            localStorage.setItem("rideHistory", JSON.stringify(history));
            alert("Rating saved!");
        });
    });
});

function rebookRide(index) {
    const history = JSON.parse(localStorage.getItem("rideHistory"));
    const ride = history[index];
    localStorage.setItem("rebookRide", JSON.stringify(ride));
    window.location.href = "book-ride.html";
}