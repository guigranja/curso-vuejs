<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong class="stock-title">
                    {{ stock.name }} <span class="stock-info">(Preço: {{ stock.price | currency }}) | Qtd: {{ stock.quantity }}</span>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field
                        label="Quantidade" type="number" v-model.number="quantity"
                        :error="insufficientQuantity || quantity < 0 || !Number.isInteger(quantity)"
                />
                <v-btn
                        class="blue darken-3 white--text" @click="sellStock"
                       :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                >
                    {{ insufficientQuantity ? 'Qtd de ações insuficiente' : 'Vender' }}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({ sellStockAction: 'sellStock' }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.sellStockAction(order)
                // this.$store.dispatch('sellStock', order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>
.stock-title {
    font-family: "Fira Code Light", monospace;
    font-size: 80%;
}

.stock-info {
    font-size: 60%;
}
</style>