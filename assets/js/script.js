const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');
let total = 0;

expenseForm.addEventListener('submit',
function(event){
    event.preventDefault();  //prevents reload

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if(document && category && !isNaN(amount))
    {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `<td>${description}</td> <td>${category}</td><td>${amount}</td>`;

        expenseList.appendChild(newRow);

        total += amount;
        totalAmount.textContent = total.toFixed(2);

        document.getElementById('description').value=''
        document.getElementById('category').value=''
        document.getElementById('amount').value=''
    }
    else
    {
        alert('Please fill out all fields with valid data!');
    }
})

