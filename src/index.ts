class Grocery{
	addGrocery: any
	createGrocery: any
	addGroceryItem: any
	status: boolean
		
	constructor(props:any) {
		this.addGrocery = document.querySelector(props.inputhook) as HTMLInputElement
		this.createGrocery = document.querySelector(props.submit) as HTMLInputElement
		this.addGroceryItem = document.querySelector(props.showTarget) as HTMLUListElement
		this.status = false;

		this.AddGroceries()
	}

	AddGroceries() {
		this.addGrocery.addEventListener('change', (e:any):void => {
			e.preventDefault();
			let value = e.target.value
			this.addGroceryItem(value)
		})	
	}	

	addGroceryList(value:string) {
		this.createGrocery.addEventListener('click', (e:any):void => {
			e.preventDefault();
			if(value.trim() === null ) {
				return null
			} else {
				const newItem = `
					<li id='item'>
						<p class='content'>${value}</p>
						<div class='buttonGroup'>
							<button class='edit btn'>Edit</button>
							<button class='delete btn'>Delete</button>
						</div>
					</li>
				`
				this.addGroceryItem.insertAdjacentHTML('beforeend' , newItem );
				this.addGrocery.value = '';
				value = ''
			}
		})
	}
}