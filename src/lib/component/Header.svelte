<script>
    import { base } from '$app/paths';
    import { BookOpen } from 'lucide-svelte';

    import Search from './Search.svelte';

    export let documentation;

    const searchSource = documentation.flatMap(category =>
        category.pages.map(page => ({
            title: page.title,
            slug: page.slug,
            contents: page.contents
                .map(content =>
                    typeof content === 'string'
                        ? content
                        : typeof content === 'object' && 'value' in content
                          ? content.value
                          : '',
                )
                .join(' '),
        })),
    );
</script>

<header
    class="flex items-center gap-3 px-6 w-full h-[70px] border-b-[1px] border-gray-700"
>
    <a href={base} class="flex items-center gap-2 me-auto text-[1.35rem]">
        <BookOpen size={24} />
        {import.meta.env.VITE_APP_NAME}
    </a>
    <Search {searchSource} />
</header>
