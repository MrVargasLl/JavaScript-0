const form = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentContainer = document.getElementById('commentContainer');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = commentInput.value.trim(); // ✅ CORREGIDO
    if (text === "") return;

    const comment = document.createElement('section');
    comment.classList.add('comment');

    const date = new Date();
    const formattedDate = date.toLocaleString('es-MX', {
        dateStyle: 'short',
        timeStyle: 'short'
    });

    comment.innerHTML = `
        <p>${text}</p>
        <small>${formattedDate}</small>
        <span class="delete-btn">X</span>
    `;

    commentContainer.prepend(comment);
    commentInput.value = "";

    const deleteBtn = comment.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        comment.remove();
    });
});