document.addEventListener('DOMContentLoaded', () => {
    const reformulateBtn = document.getElementById('reformulateBtn');
    const originalQueryInput = document.getElementById('originalQuery');
    const contextTextarea = document.getElementById('context');
    const reformulatedQueryParagraph = document.getElementById('reformulatedQuery');

    if (reformulateBtn) {
        reformulateBtn.addEventListener('click', () => {
            const originalQuery = originalQueryInput.value.trim();
            const context = contextTextarea.value.trim();
            let reformulatedQuery = '';

            if (originalQuery) {
                if (context) {
                    // Simple reformulation: combine query and context
                    reformulatedQuery = `(Context: ${context}) ${originalQuery} - Rephrased for context`;
                    // In a real scenario, you'd send these to a backend API
                    // that runs your CBQR model and returns the actual reformulated query.
                    // Example:
                    // fetch('/api/reformulate', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify({ query: originalQuery, context: context })
                    // })
                    // .then(response => response.json())
                    // .then(data => {
                    //     reformulatedQueryParagraph.textContent = data.reformulatedQuery;
                    // })
                    // .catch(error => {
                    //     console.error('Error during reformulation:', error);
                    //     reformulatedQueryParagraph.textContent = 'Error during reformulation. Please try again.';
                    // });

                } else {
                    reformulatedQuery = originalQuery + ' - (No context provided, simple rephrase)';
                }
                reformulatedQueryParagraph.textContent = reformulatedQuery;
            } else {
                reformulatedQueryParagraph.textContent = 'Please enter an original query.';
            }
        });
    }

    // Optional: Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
