async function loadUndangan() {
    const container = document.getElementById('list-undangan');
    if (!container) {
        console.error('Element with id list-undangan not found');
        return;
    }
    try {
        const response = await fetch('http://localhost:3000/undangan'); // Sesuaikan URL API Anda
        const data = await response.json();

        container.innerHTML = ''; // Clear container first

        data.forEach(item => {
            const el = document.createElement('div');
            el.classList.add('undangan-item', 'mb-3', 'p-2', 'border', 'rounded');
            el.innerHTML = `
                <h5>${item.title}</h5>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Location:</strong> ${item.location}</p>
            `;
            container.appendChild(el);
        });
    } catch (error) {
        console.error('Error fetching undangan:', error);
        container.innerHTML = '<p>Failed to load undangan data.</p>';
    }
}

// Panggil fungsi saat halaman siap (atau sesuai kebutuhan)
window.addEventListener('DOMContentLoaded', loadUndangan);