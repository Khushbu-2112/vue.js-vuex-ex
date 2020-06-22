<template>
    <div class="container flx">
        <div class="flx1">
            <div v-for="item in items" :key="item.id">
                <div class="card m-2" @click="addD(item)" style="width:fit-content">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{item.type}}</h6>
                        <p class="card-text">Rs. {{item.price}}</p>
                    </div>
                </div>
                <a class="text-danger" @click="delItem(item.id)">Delete</a>
            </div>
        </div>
        <div class="checkout">
            <h4>Checkout</h4>
            <p v-if="order.length==0">Plz select from menu by clicking item</p>
            <table v-else class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Rs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="o in order" :key="o.id">
                        <td><a @click="removeId(o.id,o.total)">X</a></td>
                        <td>{{o.name}}</td>
                        <td>
                                <a @click="add(o)">+</a> {{o.count}} 
                                <a @click="remove(o)">-</a>
                        </td>
                        <td>{{o.total}}</td>
                    </tr>
                </tbody>
            </table>
            <label for="">Total: {{amount}}</label>
            <br>
            <a v-if="this.amount!=0" style="display:block;background:var(--d-color);color:white;" @click="clr">Pay</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    computed: {
        items(){
            return this.$store.state.items;
        }
    },
    data() {
        return {
           order: [],
           amount:0,
           btnkey:1
        }
    },
    methods: {
        addD(pay){
            pay = {...pay,count:1,total:pay.price};
            // console.log(pay);
            if(this.order.some( (el) => JSON.stringify(el)===JSON.stringify(pay))){
                // console.log(' in');
            }
            else{
                this.order = [...this.order,pay];
                this.amount += pay.price;
                // console.log('not in');
            }
        },
        add(obj){
            obj.count++;
            obj.total = obj.price*obj.count;
            this.amount+=obj.price;
        },
        remove(obj){
            if(obj.count==1)
            {
                return;
            }
            obj.count--;
            obj.total = obj.price*obj.count;
            this.amount-=obj.price;
        },
        removeId(id,rs){
            this.amount -= rs;
            this.order = this.order.filter( (elem)=> elem.id != id );
        },
        clr(){
            this.order = [];
            this.amount = 0;       
        },
        delItem(id){
            this.$store.dispatch('removeItem',id);
        }
    },
}
</script>

<style scoped>
    .flx{
        display: flex;
        padding: 15px;
    }
    .flx1{
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
    }
    .checkout{
        width: 600px;
        padding: 15px;
        background: #FFF;
        border: 1px solid var(--g-color);
        border-radius: 5px;
    }
    a{
        cursor: pointer;
    }
    .card{
        background: rgb(155, 231, 196);
    }
</style>