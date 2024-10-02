export function randomNumInt(min:number, max:number) {
	return Math.floor(Math.random() * (max - min) + min)
}

export function selectCategoryHeader(array:string[]){
	const maxArray:number=array.length
	let numRandom:number=randomNumInt(0,(maxArray-1))
	let nameSelect:string=array[numRandom]
	return nameSelect
}

export function selectCategoryHeaderIndex(array:string[]){
	const maxArray:number=array.length
	let numRandom:number=randomNumInt(0,(maxArray-1))
	let nameSelect:string=array[numRandom]
	let nameSelectIndex:string=numRandom.toString()
	let arrayEnd:string[]=[nameSelect,nameSelectIndex]
	return arrayEnd
}

export function getArrayName(array:JQuery<HTMLElement>){
	let arrayNamesItems:any=[]
	for(let i in array){
		let nameItemString:string|null=array[i].textContent
		arrayNamesItems.push(nameItemString)
	}
	return arrayNamesItems
}