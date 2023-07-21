///  <reference types='Cypress'   />

describe('Validate GET API', function(){

    it('Learning GET Testing', () => {

        cy.api('GET','https://rickandmortyapi.com/api/character/?page=2').then((response)=>{
            
            expect(response.status).to.eq(200)

            
            })
    })

    it('Learning GET Testing Character', () => {

        cy.api('GET','https://rickandmortyapi.com/api/character/').then((response)=>{
            
            expect(response.status).to.eq(200)
            expect(response.body).to.have( "pages": 42)

            
            })
    })
        
})
