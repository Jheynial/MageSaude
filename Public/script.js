const checkbox = document.getElementById('toggleStyleSheetCheckbox');
const stylesheet = document.styleSheets[0]; // Assumindo que perfil.css é o primeiro arquivo de estilo carregado

// Armazenar os valores originais das variáveis CSS
const originalCSS = {};

// Função para obter as variáveis CSS originais
function getOriginalCSS() {
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        const rule = stylesheet.cssRules[i];
        if (rule.type === CSSRule.STYLE_RULE) {
            const cssStyleRule = rule;
            const style = cssStyleRule.style;

            // Iterar sobre as propriedades do estilo para encontrar variáveis CSS
            for (let j = 0; j < style.length; j++) {
                const propertyName = style[j];
                const propertyValue = style.getPropertyValue(propertyName);

                // Verificar se é uma variável CSS (começa com '--')
                if (propertyName.startsWith('--')) {
                    // Armazenar o valor original da variável CSS
                    originalCSS[propertyName] = propertyValue.trim();
                }
            }
        }
    }
}

// Função para aplicar o tema escuro
function applyDarkTheme() {
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        const rule = stylesheet.cssRules[i];
        if (rule.type === CSSRule.STYLE_RULE) {
            const cssStyleRule = rule;
            // Substituir as variáveis nas regras de estilo com os valores para o tema escuro
            cssStyleRule.style.cssText = cssStyleRule.style.cssText.replace(/var\(--color-1\)/g, 'var(--color-12)')
                                                                     .replace(/var\(--color-2\)/g, 'var(--color-13)')
                                                                     .replace(/var\(--color-3\)/g, 'var(--color-14)')
                                                                     .replace(/var\(--color-4\)/g, 'var(--color-15)')
                                                                     .replace(/var\(--color-5\)/g, 'var(--color-16)')
                                                                     .replace(/var\(--color-6\)/g, 'var(--color-17)')
                                                                     .replace(/var\(--color-7\)/g, 'var(--color-18)')
                                                                     .replace(/var\(--color-8\)/g, 'var(--color-19)')
                                                                     .replace(/var\(--color-9\)/g, 'var(--color-20)')
                                                                     .replace(/var\(--color-10\)/g, 'var(--color-21)')
                                                                     .replace(/var\(--color-11\)/g, 'var(--color-22)')
                                                                     .replace(/var\(--color-11-clear\)/g, 'var(--color-22-clear)');
        }
    }
}

// Função para aplicar o tema claro (restaurar original)
function applyLightTheme() {
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        const rule = stylesheet.cssRules[i];
        if (rule.type === CSSRule.STYLE_RULE) {
            const cssStyleRule = rule;
            // Substituir as variáveis nas regras de estilo com os valores originais
            cssStyleRule.style.cssText = cssStyleRule.style.cssText.replace(/var\(--color-12\)/g, 'var(--color-1)')
            .replace(/var\(--color-13\)/g, 'var(--color-2)')
            .replace(/var\(--color-14\)/g, 'var(--color-3)')
            .replace(/var\(--color-15\)/g, 'var(--color-4)')
            .replace(/var\(--color-16\)/g, 'var(--color-5)')
            .replace(/var\(--color-17\)/g, 'var(--color-6)')
            .replace(/var\(--color-18\)/g, 'var(--color-7)')
            .replace(/var\(--color-19\)/g, 'var(--color-8)')
            .replace(/var\(--color-20\)/g, 'var(--color-9)')
            .replace(/var\(--color-21\)/g, 'var(--color-10)')
            .replace(/var\(--color-22\)/g, 'var(--color-11)')
            .replace(/var\(--color-22-clear\)/g, 'var(--color-11-clear)'); 
        }}
}

// Event listener para o change no checkbox
checkbox.addEventListener('change', function() {
    if (this.checked) {
        applyDarkTheme(); // Aplicar o tema escuro
    } else {
        applyLightTheme(); // Aplicar o tema claro
    }
});

// Chama a função para obter as variáveis CSS originais ao carregar a página
getOriginalCSS();
