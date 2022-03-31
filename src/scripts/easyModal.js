const DEFAULT_OPTIONS = {
	title: 'Title...',
	theme: 'light',
	description: 'Description/main content',
	modal: 'modal',
	closeBtn: true,
	operationButton: [true, 'nothing'],
};

export class EasyModal {
	#modalElement;
	#removeBinded;

	constructor(options) {
		this.#removeBinded = this.remove.bind(this);
		this.#modalElement = document.createElement('div');
		this.#modalElement.classList.add('modal');
		this.update({ ...DEFAULT_OPTIONS, ...options });

		this.#modalElement.parentElement.addEventListener('click', (ev) => {
			if (ev.target == document.querySelector('.modal-overlay')) {
				this.remove();
			}
		});
	}

	set modal(value) {
		const selector = `.${value}`;
		const container = document.querySelector(selector) || createModal(value);
		container.append(this.#modalElement);
	}

	set title(value) {
		const header = `
            <header class="modal-header">
                <h2 class="modal-title">${value}</h2>
                <button id="close-modal-btn"><span class="material-icons-outlined close-btn">close</span></button>
            </header>
            `;
		this.#modalElement.innerHTML += header;
	}

	set closeBtn(value) {
		if (value) {
			const closeBtn = document.querySelector('#close-modal-btn');
			closeBtn.addEventListener('click', this.#removeBinded);
		}
	}

	set description(value) {
		const modalContent = `
            <div class="modal-content">
                <p>${value}</p>
            </div>
            `;

		this.#modalElement.innerHTML += modalContent;
	}

	set operationButton(value) {
		if (!value[0]) {
			return;
		}
		// const operationButton = console.log(value[1]);
	}

	remove() {
		const container = this.#modalElement.parentElement;
		container.remove();
	}

	update(options) {
		Object.entries(options).forEach(([key, value]) => {
			this[key] = value;
		});
	}
}

const createModal = () => {
	const container = document.createElement('div');
	container.classList.add('modal-overlay');
	document.body.appendChild(container);
	return container;
};
