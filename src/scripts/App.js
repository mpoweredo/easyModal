import { EasyModal } from "./easyModal.js";

const demoModalMain = document.getElementById("demo-modal-main");
const demoModalUsageFirst = document.getElementById("demo-modal-usage-first");
const demoModalUsageSecond = document.getElementById("demo-modal-usage-second");
const installButtonCopy = document.getElementById("copy-install-btn");
const toCopy = document.getElementById("toCopy");
const tooltip = document.querySelector(".tooltipText");


demoModalMain.addEventListener("click", () => {
	new EasyModal({
		title: "USA - California",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum dolorem est officia, quia impedit.",
		theme: "dark",
	});
});


demoModalUsageFirst.addEventListener("click", () => {
	new EasyModal({title: "France", description: "The capital city of France is Paris.", theme: "dark"});
});

demoModalUsageSecond.addEventListener("click", () => {
	new EasyModal({title: "France", operationButton: [{content: "Buy flight", href: "https://www.farecompare.com/"}]});
});

installButtonCopy.addEventListener("click", () => {
	navigator.clipboard.writeText(toCopy.textContent);

	tooltip.style.display = "block";
	setTimeout(() => {
		tooltip.style.display = "none";
	}, 1500);
});


