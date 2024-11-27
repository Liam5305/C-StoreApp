function DisplayDateOnHome() {
    const today = new Date();
    document.getElementById('currentDate').textContent = today.toLocaleDateString();
}

window.onload = DisplayDateOnHome;