$(document).ready(function () {
    // Load existing data
    const loadProfileData = () => {
        const storedData = JSON.parse(localStorage.getItem("profileData")) || {};
        $("#profile-pic").attr("src", storedData.picture || $("#profile-pic").attr("src"));
        $("#profile-name").val(storedData.name || "");
        $("#profile-desc").val(storedData.description || "");
        $("#profile-status").val(storedData.status || "online");
    };

    // Save profile data
    $("#save-profile").on("click", () => {
        const profileData = {
            picture: $("#profile-pic").attr("src"),
            name: $("#profile-name").val(),
            description: $("#profile-desc").val(),
            status: $("#profile-status").val(),
        };
        localStorage.setItem("profileData", JSON.stringify(profileData));
        alert("Profile saved successfully!");
    });

    // Update profile picture
    $("#profile-pic-input").on("change", function () {
        const reader = new FileReader();
        reader.onload = (e) => {
            $("#profile-pic").attr("src", e.target.result);
        };
        reader.readAsDataURL(this.files[0]);
    });

    loadProfileData();
});