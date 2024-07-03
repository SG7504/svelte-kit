export function load (params) {

    const data = $;{params}
    return {
        content: `hello {$params.slug}`
    } 
}