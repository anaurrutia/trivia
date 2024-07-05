function calculateScore() {
    let score = 0;
    const form = document.getElementById('trivia-form');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');
    const messageDisplay = document.getElementById('message');
    const answersDisplay = document.getElementById('answers');

    // Respuestas correctas
    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'a',
        q4: 'd',
        q5: 'a',
        q6: 'b',
        q7: 'd',
        q8: 'a',
        q9: 'c',
        q10: 'a',
    };

    // Calcular puntuación
    for (const question in correctAnswers) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswers[question]) {
            score += 10;
        }
    }

    // Mostrar puntuación y mensaje
    scoreDisplay.textContent = `Puntaje Obtenido: ${score} puntos.`;
    if (score >= 100) {
        messageDisplay.textContent = '¡Increíble! 🎉 Tienes un conocimiento impresionante.';
    } else if (score >= 50) {
        messageDisplay.textContent = '¡Buen trabajo! 👍 Sigues en el camino del conocimiento.';
    } else if (score >=30){
        messageDisplay.textContent = '¡No te desanimes! 💪 Cada día se aprende algo nuevo.';
    }
    
 // Mostrar respuestas correctas
 answersDisplay.innerHTML = `
 <div>
     <h3>Pregunta 1: Tigre de amur</h3>
     <p>Tigre de Amur. Esta especie se encuentra en peligro crítico principalmente debido a la pérdida de hábitat y la caza furtiva.</p>
     <img src="imagenes/tigre de amur.jpg" alt="amur">
 </div>
 <div>
     <h3>Pregunta 2: Pangolín</h3>
     <p>Pangolín. Esta especie es cazada por su carne y sus escamas, que se utilizan en la medicina tradicional asiática.</p>
     <img src="imagenes/pango.jfif" alt="pango">
 </div>
 <div>
     <h3>Pregunta 3: Tortuga laúd</h3>
     <p>Tortuga laúd. Es la mayor de todas las tortugas marinas y enfrenta graves amenazas por actividades humanas.</p>
     <img src="imagenes/tortuga laúd.jpg" alt="tortuga">
 </div>
 <div>
     <h3>Pregunta 4: Leopardo de las nieves</h3>
     <p> Leopardo de las nieves. Esta especie se encuentra en las montañas de Asia central y enfrenta graves amenazas debido a la caza y la pérdida de hábitat.</p>
     <img src="imagenes/tigre de las nieves.jpg" alt="tigre">
 </div>
 <div>
     <h3>Pregunta 5: Orangután de sumatra</h3>
     <p>Orangután de Sumatra. Esta especie enfrenta una reducción drástica de su hábitat debido a la deforestación para la producción de aceite de palma.</p>
     <img src="imagenes/orangután de sumatra.jpg" alt="orangutan">
 </div>
 <div>
     <h3>Pregunta 6: Cóndor andino</h3>
     <p> Cóndor andino. Esta ave enfrenta amenazas significativas en los Andes debido a la caza y la pérdida de áreas de alimentación.</p>
     <img src="imagenes/condor andino.jpg" alt="cóndor andino">
 </div>
 <div>
     <h3>Pregunta 7: Ballena azul</h3>
     <p>Ballena azul. Es el animal más grande del mundo y enfrenta amenazas graves por la contaminación y la colisión con barcos.</p>
     <img src="imagenes/ballena azul.jpg" alt="ballena">
 </div>
 <div>
     <h3>Pregunta 8: Tortuga carey</h3>
     <p>Tortuga carey. Esta especie enfrenta serias amenazas en sus áreas de anidación debido a la actividad humana.</p>
     <img src="imagenes/tortuga carey.jpg" alt="tortuga">
 </div>
 <div>
     <h3>Pregunta 9: Tigre siberiano</h3>
     <p>Tigre siberiano. Es el felino más grande del mundo y enfrenta amenazas severas en las regiones boscosas de Rusia.</p>
     <img src="imagenes/tigre siberiano.jpg" alt="tigre siberiano">
 </div>
 <div>
     <h3>Pregunta 10: Tarsero fantasma</h3>
     <p>Tarsero fantasma. Esta especie endémica de Indonesia enfrenta graves amenazas debido a la pérdida de su hábitat forestal.</p>
     <img src="imagenes/tarsero fantasma.jpg" alt="tarsero fantasma">
 </div>
`;

// Mostrar la sección de resultados
result.style.display = 'block';
}
