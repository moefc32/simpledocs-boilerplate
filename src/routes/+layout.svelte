<script>
    import '../app.css';
    import documentation from '$lib/documentation.json';

    import Header from '$lib/component/Header.svelte';
    import Sidebar from '$lib/component/Sidebar.svelte';
    import Footer from '$lib/component/Footer.svelte';
</script>

<svelte:head>
    <meta property="og:site_name" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Simpledocs" />
</svelte:head>

<Header />
<div class="flex">
    <Sidebar {documentation} />
    <div class="flex flex-1 flex-col gap-6">
        <main class="flex flex-1 flex-col p-6 leading-7">
            <slot />
        </main>
        <Footer />
    </div>
</div>
