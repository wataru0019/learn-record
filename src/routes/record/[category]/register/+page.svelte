<script lang="ts">
    import { onMount } from 'svelte';
    const categories = [
        { value: 'english', label: '英語' },
        { value: 'programming', label: 'プログラミング' },
        { value: 'it', label: 'IT' },
        { value: 'history', label: '歴史' }
    ]
    let { data } = $props();
    let category = $state("");
    let title = $state("");
    let content = $state("");
    let registerDate = $state(new Date())

    onMount(() => {
        category = categories.filter(c => c.value === data.category)[0].label;
    });
</script>

<svelte:head>
    <title>記録登録</title>
</svelte:head>

<div class="container">
    <h1>記録登録</h1>
    <form method="POST">
        <div class="form-group">
            <label for="category">カテゴリー</label>
            <input name="category" id="category" value={category} readonly disabled />
        </div>
        <div class="form-group">
            <label for="title">タイトル</label>
            <input name="title" id="title" placeholder="タイトルを入力してください" bind:value={title} required />
        </div>
        <div class="form-group">
            <label for="content">内容</label>
            <textarea
                id="content"
                name="content"
                rows=5
                placeholder="実施した内容を入力してください。"
                bind:value={content}
            ></textarea>
        </div>
        <div class="form-group">
            <label for="register-date">記録日</label>
            <input type="date" id="register-date" name="register-date" bind:value={registerDate} />
        </div>
        <div class="form-group submit">
            <button type="submit">保存</button>
        </div>
    </form>
</div>