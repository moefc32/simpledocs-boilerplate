<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    export let documentation;

    $: location = $page.url.pathname.replace(/\/$/, '');
</script>

<aside
    class="flex flex-1 flex-col items-stretch gap-1 p-6 max-w-[250px] min-h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] border-e-[1px] border-gray-700 overflow-y-auto"
>
    <a
        href={base.replace(/\/$/, '')}
        class="{base.replace(/\/$/, '') === location
            ? '-mx-2 px-2 py-1 bg-blue-500/60 hover:bg-blue-500/75 text-white'
            : 'py-1 text-white/60 hover:text-white'} transition duration-150 ease-in-out rounded-sm"
    >
        Home
    </a>
    {#each documentation as section, i}
        <div class="mt-5 mb-2 text-[.8rem] font-bold uppercase">
            {section.name}
        </div>
        {#each section.pages as item, j}
            <a
                href={item.slug}
                class="{`${base}/${item.slug}` === location
                    ? '-mx-2 px-2 py-1 bg-blue-500/60 hover:bg-blue-500/75 text-white'
                    : 'py-1 text-white/60 hover:text-white'} transition duration-150 ease-in-out rounded-sm"
                data-sveltekit-reload
            >
                {item.title}
            </a>
        {/each}
    {/each}
</aside>
