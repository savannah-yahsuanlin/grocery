class Grocery {
	addGrocery: any
	createGrocery: any
	addGroceryItem: any
	status: boolean
		
	constructor(props:any) {
		this.addGrocery = document.querySelector(props.inputhook) as HTMLElement
		this.createGrocery = document.querySelector(props.submit) as HTMLElement
		this.addGroceryItem = document.querySelector(props.showTarget) as HTMLElement
		this.status = false;

		this.AddGroceries()
		this.DeleteGrocery()
	}

	AddGroceries() {
		this.addGrocery?.addEventListener('change', (e:any):void => {
			e.preventDefault();
			let value:string = e.target.value!
			this.addGroceryList(value)
		})	
	}	

	addGroceryList(value:string) {
		this.createGrocery.addEventListener('click', (e:any):void => {
			e.preventDefault();

			if(!value.trim()) {
				return null
			} else {
				const newItem = `
					<li class="list">
						<p class="content">${value}</p>
						<div class="buttonGroup">
							<button class="edit btn">Edit</button>
							<button class="delete btn">Delete</button>
						</div>
					</li>
				`
				this.addGroceryItem.insertAdjacentHTML('beforeend', newItem);
				this.addGrocery.value = '';
				value = ''

				this.DeleteGrocery()
			}
		})
	}

	DeleteGrocery() {
		const lis = document.querySelectorAll<HTMLElement>('.list')
		const deleteBtns = document.querySelectorAll<HTMLElement>('.delete')

		deleteBtns.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				lis[index].remove()
			})
		})
	}
}

const newGrocery= new Grocery({
    inputhook : '.addTodo',
    submit : '.submit',
    showTarget : '.todoList'
});