import { randomNumInt, selectCategoryHeader, selectCategoryHeaderIndex, getArrayName } from '@helper/functions.Home'
import { Category } from '@data/headerCategory.json'
class HomeHeader{
    navHeaderCategoryList:()=>Cypress.Chainable<JQuery<HTMLElement>>
    navHeaderSubCategoryList:()=>Cypress.Chainable<JQuery<HTMLElement>>

    constructor(){
        this.navHeaderCategoryList=()=>cy.get('.vl-flyout-nav__container')
        this.navHeaderSubCategoryList=()=>cy.get('.vl-flyout-nav__sub-cats')
    }

    selectCategoryList(){
        let nameSelect:string[]=selectCategoryHeaderIndex(Category)
        cy.wrap(nameSelect[1]).as('indexSelect')
        this.navHeaderCategoryList().find(`[data-currenttabindex="${nameSelect[1]}"]`).click()
    }

    selectSubCategory(){
        let nameSelectIndex:string[]=selectCategoryHeaderIndex(Category)
        cy.wrap(nameSelectIndex[1]).as('indexSelect')
        if(nameSelectIndex[0]=='Deals'){
            this.navHeaderCategoryList().find(`[data-currenttabindex="${nameSelectIndex[1]}"]`).click()
        }
        else if(nameSelectIndex[0]=='Sell'){
            this.navHeaderCategoryList().find(`[data-currenttabindex="${nameSelectIndex[1]}"]`).realHover()
            cy.get(`[data-currenttabindex="${nameSelectIndex[1]}"] li`).then((array)=>{
                const maxItems:number=array.length
                const numRan:number=randomNumInt(0,(maxItems-1))
                const nameItems:string[]=getArrayName(array)
                const nameStringItem:string=nameItems[numRan]
                cy.wrap(numRan).as('indexSubCate')
                console.log(nameStringItem)
                cy.contains(`${nameStringItem}`).click()
            })
            cy.get('#onetrust-accept-btn-handler').click()
        }
        else{
            this.navHeaderCategoryList().find(`[data-currenttabindex="${nameSelectIndex[1]}"]`).realHover()
            cy.get(`[data-currenttabindex="${nameSelectIndex[1]}"] li`).then((array)=>{
                const maxItems:number=array.length
                const numRan:number=randomNumInt(0,(maxItems-1))
                const nameItems:string[]=getArrayName(array)
                const nameStringItem:string=nameItems[numRan]
                cy.wrap(numRan).as('indexSubCate')
                console.log(nameStringItem)
                cy.contains(`${nameStringItem}`).click()
            })
        }
        

    }
}

export const homeHeader = new HomeHeader