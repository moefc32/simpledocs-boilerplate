<script>
    import '../app.css';

    import Header from '$lib/component/Header.svelte';
    import Sidebar from '$lib/component/Sidebar.svelte';
    import Footer from '$lib/component/Footer.svelte';
</script>

<svelte:head>
    <title>{import.meta.env.VITE_APP_NAME}</title>
    <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:site_name" content="Simpledocs" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Simpledocs" />
</svelte:head>

<Header />
<div class="flex">
    <Sidebar />
    <div class="flex flex-1 flex-col gap-6">
        <div class="flex flex-1 flex-col p-6">
            <slot />
        </div>
        <Footer />
    </div>
</div>
