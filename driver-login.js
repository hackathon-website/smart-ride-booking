document.getElementById("driverLoginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("driverId").value;
    const password = document.getElementById("driverPassword").value;

    // Sample driver validation
    const driver = {
        id: "driver123",
        password: "pass123",
        name: "Ravi Kumar",
        age: 35,
        car: "Hyundai Aura - TN 01 AB 1234"
    };

    if (id === driver.id && password === driver.password) {
        localStorage.setItem("loggedDriver", JSON.stringify(driver));
        window.location.href = "driver-profile.html";
    } else {
        alert("Invalid ID or Password");
    }
});
