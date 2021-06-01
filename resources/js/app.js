import '../css/app.css'

const AddField = {
  productTable: document.getElementById('product-table'),
  handleAddField() {
    let rowsNumber = productTable.rows.length
    let newRow = productTable.insertRow(rowsNumber)

    let input0 = document.createElement('input')
    input0.setAttribute('type', 'text')

    let button = document.createElement('button')
    button.innerHTML = 'confirmar'

    let celula0 = newRow.insertCell(0)
    celula0.appendChild(input0)

    let celula3 = newRow.insertCell(3)
    celula3.appendChild(button)
  },
}

// function addField() {
//   let rowsNumber = productTable.rows.length
//   let newRow = productTable.insertRow(rowsNumber)

//   let input0 = document.createElement('input')
//   input0.setAttribute('type', 'text')

//   let input1 = document.createElement('input')
//   input1.setAttribute('type', 'text')

//   let input2 = document.createElement('input')
//   input2.setAttribute('type', 'text')

// for (const i = 0; i < rowsNumber - 1; i++) {
//   let input = document.createElement('input')
//   input.setAttribute('type', 'text')

//   let celula = newRow.insertCell(i)
//   celula.appendChild(input)
// }

//   let button = document.createElement('button')
//   button.innerHTML = 'confirmar'

//   let celula0 = newRow.insertCell(0)
//   celula0.appendChild(input0)
//   let celula1 = newRow.insertCell(1)
//   celula1.appendChild(input1)
//   let celula2 = newRow.insertCell(2)
//   celula2.appendChild(input2)

//   let celula3 = newRow.insertCell(3)
//   celula3.appendChild(button)

//   console.log('oi')
//   return newRow
// }
