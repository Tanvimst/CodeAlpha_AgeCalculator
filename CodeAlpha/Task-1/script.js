document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    const today = new Date();
    let age = today.getFullYear() - year;
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
  
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }
  
    document.getElementById('result').textContent = `You are ${age} years old.`;
  });
  