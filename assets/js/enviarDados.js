document.getElementById('romanForm').addEventListener('submit', async (event) => {
    event.preventDefault(); 

 
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    const operation = document.getElementById('operation').value;


    const data = {
        number1,
        number2,
        operation
    };

    try {
     
        const response = await fetch('/processar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        document.getElementById('result').textContent = result.resultado;
    } catch (error) {
        console.error('Erro ao processar dados:', error);
        document.getElementById('result').textContent = 'Erro ao processar dados.';
    }
});
