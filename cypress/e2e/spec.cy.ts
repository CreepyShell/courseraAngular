describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('app-root h1').contains('Ristorante Con Fusion');
  });

  it('Should go to the about page by clicking on the link', () => {
    cy.visit('/');
    let el = cy.get('a').eq(1);
    el.click();
    cy.get('h3').contains('About Us');
  });

  it('Should add a new comment to the first dish', () => {
    cy.visit('/dishdetail/0');
    let testComment = 'Test comment';

    cy.get('input[type=text]').type('Test Author');
    cy.get('textarea').type(testComment);
    cy.get('button[type=submit]').click();

    let matItem = cy.get('mat-list mat-list-item').eq(6);
    let span = matItem.children().first();
    span.contains('Test comment');
  });
});
