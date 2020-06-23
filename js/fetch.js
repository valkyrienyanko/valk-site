fetch('https://api.github.com/users/valkyrienyanko/repos?page=1&per_page=100').then(function (response) {
	return response.json();
}).then(function (data) {
	for (let i = 0; i < data.length; i++) {
		var titleElement = document.createElement("h3");
		var title = document.createTextNode(data[i].name);
		titleElement.appendChild(title);

		var descElement = document.createElement("p");
		var desc = document.createTextNode(data[i].description);
		descElement.appendChild(desc);

		var repoContainerElement = document.createElement("div");
		repoContainerElement.appendChild(titleElement);
		repoContainerElement.appendChild(descElement);

		repoContainerElement.classList.add("style");

		document.body.appendChild(repoContainerElement);
	}
});