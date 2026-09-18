<script>
    import { onMount } from 'svelte';
    import * as pdfjsLib from 'pdfjs-dist';
    import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
    import ky from 'ky';

    export let target;
    export let fitWidth = true;

    let container;
    let scale = 1.5;

    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

    async function renderPDF() {
        if (!target || !container) return;

        const fileUrl = target.startsWith('/')
            ? `${import.meta.env.VITE_BASE_PATH || ''}${target}`
            : target;

        try {
            const blob = await ky.get(fileUrl).blob();
            const pdfBlobUrl = URL.createObjectURL(blob);
            const loadingTask = pdfjsLib.getDocument(pdfBlobUrl);
            const pdf = await loadingTask.promise;

            container.innerHTML = '';

            const firstPage = await pdf.getPage(1);
            const viewport = firstPage.getViewport({ scale: 1 });

            if (fitWidth) {
                const containerWidth = container.clientWidth;
                scale = containerWidth / viewport.width;
            } else {
                const containerHeight = container.clientHeight;
                scale = containerHeight / viewport.height;
            }

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                if (!fitWidth) {
                    canvas.style.marginLeft = 'auto';
                    canvas.style.marginRight = 'auto';
                }

                container.appendChild(canvas);

                const context = canvas.getContext('2d');
                await page.render({ canvasContext: context, viewport }).promise;
            }

            URL.revokeObjectURL(pdfBlobUrl);
        } catch (e) {
            console.error('PDF Render failed:', e);
        }
    }

    onMount(() => {
        renderPDF();
        window.addEventListener('resize', renderPDF);
        return () => window.removeEventListener('resize', renderPDF);
    });
</script>

<div class="w-full h-[calc(100dvh-100px)] rounded-lg overflow-hidden">
    <div
        bind:this={container}
        class="flex flex-col gap-3 bg-slate-500/50 w-full h-full border-1 border-gray-700 overflow-y-auto"
    ></div>
</div>

<style>
    div::-webkit-scrollbar {
        width: 0.85rem;
    }

    div::-webkit-scrollbar-track {
        background: rgba(100%, 100%, 100%, 0.85);
    }

    div::-webkit-scrollbar-thumb {
        background: var(--color-gray-500);
    }

    div::-webkit-scrollbar-thumb:hover {
        background: var(--color-gray-600);
    }
</style>
