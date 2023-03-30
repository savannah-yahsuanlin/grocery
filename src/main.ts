class Grocery {
	addGrocery: any
	createGrocery: any
	addGroceryItem: any
		
	constructor(props:any) {
		this.addGrocery = document.querySelector(props.input) as HTMLElement
		this.createGrocery = document.querySelector(props.submit) as HTMLElement
		this.addGroceryItem = document.querySelector(props.show) as HTMLElement

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

			if(!value) {
				return null
			} else {
				const newItem = `
					<li class="list">
						${value}
						<button class="delete">Delete</button>
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
    input: '.addTodo',
    submit: '.submit',
    show: '.todoList'
});