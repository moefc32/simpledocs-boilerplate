<script>
    import '../app.css';
    import { page } from '$app/stores';
    import documentation from '$lib/documentation.json';

    import Header from '$lib/component/Header.svelte';
    import Sidebar from '$lib/component/Sidebar.svelte';
    import Footer from '$lib/component/Footer.svelte';

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

<svelte:head>
    <meta property="og:site_name" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Simpledocs" />
</svelte:head>

<Header {searchSource} />
<div class="flex flex-1 items-stretch pt-[70px] h-full">
    <Sidebar {searchSource} {documentation} />
    <div class="flex flex-1 flex-col gap-6 md:max-w-[calc(100%-250px)]">
        <main
            class="flex flex-1 {$page.status >= 300
                ? 'justify-center items-center gap-6 text-xl'
                : 'flex-col'} p-6 leading-7 w-full max-w-5xl"
        >
            <slot />
        </main>
        <Footer />
    </div>
</div>
