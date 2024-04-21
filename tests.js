// Test para validar los archivos HTML, CSS y JavaScript

// 1. Validar la estructura del archivo HTML
function testHTMLStructure() {
    console.log("Validando la estructura del archivo HTML...");
    // Imprimir el contenido completo del archivo HTML en la consola
    console.log(document.documentElement.innerHTML);
}


// 2. Validar la sintaxis del archivo CSS
function testCSSSyntax() {
    console.log("Validando la sintaxis del archivo CSS...");
    // Intentar cargar el archivo CSS y verificar si hay errores en la consola del navegador
    const styleSheets = document.styleSheets;
    for (let styleSheet of styleSheets) {
        for (let rule of styleSheet.cssRules) {
            console.log(rule.cssText);
        }
    }
}

// 3. Validar la funcionalidad del archivo JavaScript
function testJavaScriptFunctionality() {
    console.log("Validando la funcionalidad del archivo JavaScript...");
    // Ejecutar la función de búsqueda y verificar si hay errores en la consola del navegador
    buscarPalabra("ciencia");
}

// Ejecutar los tests y mostrar los resultados
function runTests() {
    console.log("Ejecutando tests...");

    // Test de estructura HTML
    testHTMLStructure();

    // Test de sintaxis CSS
    testCSSSyntax();

    // Test de funcionalidad JavaScript
    testJavaScriptFunctionality();

    console.log("Tests completados.");
}

// Ejecutar los tests al cargar la página
runTests();
