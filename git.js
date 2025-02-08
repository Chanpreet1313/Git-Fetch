function getUserInfo() {
    var username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter a GitHub username!");
        return;
    }

    var url = "https://api.github.com/users/" + username;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            displayUserInfo(response);
        } else if (xhr.readyState === 4) {
            alert("Failed to fetch user information. Please check the username and try again.");
        }
    };
    xhr.send();
}

function displayUserInfo(userInfo) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>User Information:</h2>
        <p><strong>Name:</strong> ${userInfo.name}</p>
        <p><strong>Username:</strong> ${userInfo.login}</p>
        <p><strong>Followers:</strong> ${userInfo.followers}</p>
        <p><strong>Following:</strong> ${userInfo.following}</p>
        <p><strong>Public Repositories:</strong> ${userInfo.public_repos}</p>
    `;
}