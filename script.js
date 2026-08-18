function saveData() {

    const child = {
        id: document.getElementById("braceletID").value.trim(),
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        blood: document.getElementById("blood").value.trim(),
        allergy: document.getElementById("allergy").value.trim(),
        medical: document.getElementById("medical").value.trim(),
        parent: document.getElementById("parent").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim()
    };

    if (!child.id || !child.name || !child.phone) {
        alert("Please enter Bracelet ID, Child Name and Parent Phone.");
        return;
    }

    localStorage.setItem("childData", JSON.stringify(child));

    alert("✅ Child data saved successfully!");

    window.location.href = "index.html";
}