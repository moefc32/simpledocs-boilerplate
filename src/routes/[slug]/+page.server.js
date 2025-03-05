import documentation from '$lib/documentation.json';

export function entries() {
    return documentation.flatMap((category) => {
        return category.pages.map((page) => {
            return { slug: page.slug };
        });
    });
}

export async function load({ params }) {
    const { slug } = params;

    for (const category of documentation) {
        for (const page of category.pages) {
            if (page.slug === slug) {
                return {
                    ...page,
                };
            }
        }
    }

    return;
}
