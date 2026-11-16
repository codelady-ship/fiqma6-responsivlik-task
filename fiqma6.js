// Hamburger menu toggle
const bars = document.querySelector('.bars');
const links = document.getElementById('main-links');

function setMenu(open) {
    links.classList.toggle('open', open);
    bars.setAttribute('aria-expanded', String(open));
    bars.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
}

bars.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Photo gallery arrows (wrap around at both ends)
const track = document.getElementById('photo-track');
document.querySelectorAll('.gallery .arrow').forEach((btn) => {
    btn.addEventListener('click', () => {
        const photo = track.querySelector('.photo');
        const step = photo ? photo.getBoundingClientRect().width + 24 : track.clientWidth;
        const dir = btn.classList.contains('next') ? 1 : -1;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
        const atStart = track.scrollLeft <= 2;
        if (dir === 1 && atEnd) track.scrollTo({ left: 0 });
        else if (dir === -1 && atStart) track.scrollTo({ left: track.scrollWidth });
        else track.scrollBy({ left: dir * step });
    });
});
