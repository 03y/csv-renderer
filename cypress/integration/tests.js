// Tests for csv renderer by kyle

import 'cypress-file-upload';

describe('Kyle\'s Tests', function () {
    before (function() {
        cy.visit('/index.html');
    });

    // Ensure page loads properly
    it('Page loads', function () {
        cy.get('#name').should('be.visible');
        cy.get('#fileUpload').should('be.visible');
    });

    // Ensure file upload works
    it ('Upload file', () => {
        const filepath = 'example_csv1.csv';
        cy.get('input[type="file"]').attachFile(filepath);
    });
    
    // Ensure file is rendered
    it ('Render table', () => {
        cy.get('#table');
    });

    // Ensure page can be reset
    it ('Click link to reset', () => {
        cy.get('#name').click();
    });
});
