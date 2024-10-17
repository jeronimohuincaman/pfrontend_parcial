<script lang="ts">
import { useCartStore } from 'cartStore';
import type { Book } from '@/models/BookModel'


const cartStore = useCartStore();

const books: Book[] = cartStore.getAllBooks();


console.log('puto', books);

</script>

<template>
    <div v-for="book of books" :key="book.id">
        <div class="img-cover">
            <img :src="book.coverImg" v-bind:alt="book.title">
        </div>
        <div class="book-title">{{ book.title }}</div>
        <div class="book-series">{{ book.series }}</div>
        <div class="book-author">{{ book.author }}</div>
        <Rating class="star" v-model="book.rating" :stars="5" />
        <div class="publisher">{{ book.publisher }}</div>
        <div class="price">$ {{ book.price }}.00</div>
    </div>
</template>

<style scoped></style>