<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="green darken-3 white--text">
            <v-card-title class="headline">
                <strong class="stock-title">{{ stock.name }} <span class="stock-info">(Preço: {{ stock.price }})</span></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity" />
                <v-btn class="green darken-3 white--text" @click="buyStock"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                >Comprar</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>
.stock-title {
    font-family: Courier, monospace;
    font-size: 80%;
}

.stock-info {
    font-size: 60%;
}
</style>