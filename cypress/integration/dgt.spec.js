describe('Should save changes in notifications tab', () => {
  it('Should sign up', () => {
    cy.visit('https://sedeapl.dgt.gob.es/WEB_IEST_CONSULTA/subcategoria.faces');
  });
  it('Should go to DGT web page and download the microdata', () => {
    cy.get('input[value="Vehículos"]').should('exist').click();
    cy.get('input[value="Matriculaciones"]').should('exist').click();
    cy.get('input[value="Microdatos"]').should('exist').click();
    cy.window()
      .document()
      .then(function (doc) {
        doc.addEventListener('click', () => {
          setTimeout(function () {
            doc.location.reload();
          }, 5000);
        });
        cy.get('input[value="Descargar"]').eq(1).should('exist').click();
      });
  });
});
