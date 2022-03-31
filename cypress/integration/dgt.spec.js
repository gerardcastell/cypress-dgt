describe('Should save changes in notifications tab', () => {
  after(() => {
    cy.task('uploloadFileToS3');
  });
  it('Should Visit DGT', () => {
    cy.visit('https://sedeapl.dgt.gob.es/WEB_IEST_CONSULTA/subcategoria.faces');
  });
  it('Should go to DGT web page and download the microdata', () => {
    cy.get('input[value="Vehículos"]').should('exist').click();
    cy.get('input[value="Matriculaciones"]').should('exist').click();
    cy.get('input[value="Microdatos"]').should('exist').click();
    const d = new Date();
    cy.get('select[id="configuracionInfPersonalizado:filtroMesMes"]').select(
      d.getMonth() - 1
    );
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
