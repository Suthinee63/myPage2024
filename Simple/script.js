let count = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');
    const result3 = document.getElementById('result3');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน"; 

 }
 function checkAnswer2(answer) {
    const result = document.getElementById('result_AC');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง ALL Complex นั่งเองงง ";
        result.style.color = 'green';
        count++;
    } else {
        result.textContent = "มะช่ายย ลองทายใหม่จิ";
        result.style.color = 'red';
    }

    result3.textContent = "คุณได้คะแนนทั้งหมด " + count + " คะแนน";   
    count = 0;
 }


 