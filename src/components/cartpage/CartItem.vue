<template>
    <article>
        <p>{{ book.Title }}</p>
        <p class="dots"></p>
        <p>{{ book.Price }}</p>

    </article>
</template>

<script>
export default {
    props: {
        book: Object
    }
}
</script>

<style>

</style>