export async function load() {
    const post = await import('$lib/content/example.md');

    const content = post.default;

    return {
        content
    };
}
