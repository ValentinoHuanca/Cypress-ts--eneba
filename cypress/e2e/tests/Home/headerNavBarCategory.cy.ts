import { homeHeader } from '@pages/home.page'
import { urls } from '@data/headerCategory.json'
 

describe('TS| eBay | Home | seleccionar categoría en la navBar y ser redireccionado a la categoría elegida',()=>{
    beforeEach('Precondiciones',()=>{
        cy.visit('/')
        cy.get('[class="gh-eb-Geo-flag gh-sprRetina"]').then((language)=>{
            let languageS:string|null=language[0].textContent
            console.log(languageS)
            if(languageS=='Idioma actual: Español'){
                cy.get('#gh-eb-Geo-a-default').realHover()
                cy.get('.gh-eb-Geo-txt').click({multiple:true})
            }
        })
    })
    it('TC1| seleccionar una categoría de la navBar y ingresar en ella',()=>{
        homeHeader.selectCategoryList()
        cy.get('@indexSelect').then((nameSelect:any)=>{
            let nameSelectS: keyof typeof urls=nameSelect
            console.log(nameSelectS)
            if(nameSelectS=='8'){
                cy.url().should('contain',`${urls[nameSelectS].urlCategory}`)
            }
            else if(nameSelectS=='9'){
                cy.get('#onetrust-accept-btn-handler').click()
                cy.url().should('contain',`${urls[nameSelectS].urlCategory}`)
            }
            else{
                cy.url().should('contain',`${urls[nameSelectS].urlCategory}`)
            }
        })
        
    })
    it('TC2| seleccionar una de las subcategorías en la navBar',()=>{
        homeHeader.selectSubCategory()
        cy.get('@indexSelect').then((indexSelect:any)=>{
            cy.get('@indexSubCate').then((indexSubCate:any)=>{
               let nameSelectS:keyof typeof urls=indexSelect
               let indexSubCateS:keyof typeof urls=indexSubCate
                if(nameSelectS=='8'){
                    cy.url().should('contain',`${urls[nameSelectS].urlCategory}`)
                }
                else if(nameSelectS=='9'){
                    cy.url().should('contain',`${urls[nameSelectS].urlSubCategories[indexSubCateS]}`)
                }
                else{
                    cy.url().should('contain',`${urls[nameSelectS].urlSubCategories[indexSubCateS]}`)
                } 
            })
            
        })
        
    })
})