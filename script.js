document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formcadastro');
    const btnClear = document.getElementById('btnClear');
    const btnSubmit = document.getElementById('btnSubmit');
    let cadastro = [];
    let editIndex = -1;

    function renderTable() {
        const tableBody = document.querySelector('#cadastroTable tbody');
        tableBody.innerHTML = '';
        cadastro.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.nome}</td>
                <td>${item.produto}</td>
                <td>${item.valor}</td>
                <td>
                    <div class="table-buttons">
                        <button class="edit-button" onclick="editItem(${index})">Editar</button>
                        <button class="delete-button" onclick="deleteItem(${index})">Excluir</button>
                    </div>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    function validateForm() {
        let valid = true;
        const inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('invalid');
                input.classList.remove('valid');
                valid = false;
            } else {
                input.classList.remove('invalid');
                input.classList.add('valid');
            }
        });
        return valid;
    }

    window.editItem = function(index) {
        const item = cadastro[index];
        document.getElementById('nome').value = item.nome;
        document.getElementById('produto').value = item.produto;
        document.getElementById('valor').value = item.valor;
        editIndex = index;
    }

    window.deleteItem = function(index) {
        if (confirm('Tem certeza que deseja excluir este item?')) {
            cadastro.splice(index, 1);
            renderTable();
        }
    }

    btnClear.addEventListener('click', function() {
        form.reset();
        editIndex = -1;
        const inputs = form.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            input.classList.remove('valid');
            input.classList.remove('invalid');
        });
    });

    btnSubmit.addEventListener('click', function() {
        if (validateForm()) {
            const nome = document.getElementById('nome').value;
            const produto = document.getElementById('produto').value;
            const valor = document.getElementById('valor').value;

            if (editIndex === -1) {
                cadastro.push({ nome, produto, valor });
            } else {
                cadastro[editIndex] = { nome, produto, valor };
                editIndex = -1;
            }
            form.reset();
            const inputs = form.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                input.classList.remove('valid');
                input.classList.remove('invalid');
            });
            renderTable();
        } else {
            alert('Todos os campos devem ser preenchidos.');
        }
    });

    renderTable();
});

