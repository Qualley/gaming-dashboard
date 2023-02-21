//function that takes (element, index, and delay)
export function slideUp(element, index, delay) {
    element.style = `
        animation: fadeUp 2s cubic-bezier(0.42, 0, 0.08, 0.98);
        animation-delay: ${delay * index}s;
        animation-direction: forwards;
        animation-fill-mode: forwards;
    `
}