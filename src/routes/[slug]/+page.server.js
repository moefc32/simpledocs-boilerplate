import { error } from '@sveltejs/kit';
import documentation from '$lib/documentation.json';

export function entries() {
    return documentation.flatMap(category =>
        category.pages.map(({ slug }) => ({ slug }))
    );
}

export async function load({ params }) {
    const { slug } = params;
    const allPages = documentation.flatMap(category => category.pages);
    const index = allPages.findIndex(page => page.slug === slug);

    if (index === -1) {
        throw error(404, 'Not Found');
    }

    return {
        ...allPages[index],
        previousPage: index > 0 ? allPages[index - 1] : null,
        nextPage: index < allPages.length - 1 ? allPages[index + 1] : null,
    };
}
