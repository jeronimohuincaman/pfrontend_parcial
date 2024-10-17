import type { Book } from "@/models/BookModel";
import type { CartState } from "@/models/CartState";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        loading: false,
        data: []
    }),
    actions: {
        getAllBooks(): Book[] {
            console.log(this.data)
            return this.data
        },
        removeBook(book: Book): void {
            this.data = this.data.filter((item) => item.id !== book.id);
        },
        addBook(book: Book): void {
            console.log(book)
            this.data.push(book);
        }
    }

})