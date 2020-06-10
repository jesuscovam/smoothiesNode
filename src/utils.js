export function capitalize(name) {
    const capitalized =name.split(' ').map(word => {
        const first = word.charAt(0).toUpperCase()
        const full = `${first}${word.slice(1)}`
        return full
    }).join(' ')
    return capitalized
}