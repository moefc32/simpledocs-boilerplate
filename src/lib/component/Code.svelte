<script>
    import { onMount, onDestroy } from 'svelte';
    import { indentWithTab } from '@codemirror/commands';
    import { json } from '@codemirror/lang-json';
    import { EditorState } from '@codemirror/state';
    import { oneDark } from '@codemirror/theme-one-dark';
    import { EditorView, keymap, lineNumbers } from '@codemirror/view';
    import { minimalSetup } from 'codemirror';

    export let value = '';

    let editorContainer;
    let view;

    function updateEditorContent(newValue) {
        if (view) {
            view.dispatch({
                changes: {
                    from: 0,
                    to: view.state.doc.length,
                    insert: JSON.stringify(JSON.parse(newValue), null, 4),
                },
            });
        }
    }

    onMount(() => {
        let state = EditorState.create({
            doc: JSON.stringify(JSON.parse(value), null, 4),
            extensions: [
                minimalSetup,
                json(),
                lineNumbers(),
                oneDark,
                EditorState.readOnly.of(true),
                keymap.of([indentWithTab]),
            ],
        });

        view = new EditorView({
            state,
            parent: editorContainer,
        });
    });

    onDestroy(() => {
        if (view) view.destroy();
    });

    $: if (view) updateEditorContent(value);
</script>

<div
    class="my-3 bg-[#282c34] w-full max-w-[calc(100vw-4rem)] rounded-lg overflow-hidden"
>
    <div bind:this={editorContainer} class="text-sm w-full min-h-[15px]"></div>
</div>

<style>
    :global(* .cm-scroller) {
        font-family: var(--font-mono) !important;
    }
</style>
