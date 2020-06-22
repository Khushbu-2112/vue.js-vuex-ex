<template>
    <div>
        <div class="box">
            <form @submit.prevent="addItem" class="form-group">
                <h3>Add Menu Item</h3>
                <br>
                <select name="type" class="form-control">
                    <option value="" selected disabled>Select Type</option>
                    <option value="Tea">Tea</option>
                    <option value="Coffee">Coffee</option>
                    <option value="IceCream">Ice cream</option>
                </select>
                <br>
                <input name="name" class="form-control" type="text" placeholder="Name of Item">
                <br>
                <input name="price" class="form-control" type="number" placeholder="Price in Rs.">
                <br>
                <input type="submit" class="btn" value="Save">
                <input type="reset" class="btn" value="Cancel">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:'Menu',
    methods: {
        addItem(even){
            this.$store.dispatch('getId');
            let itemId = this.$store.state.idc;
            let newObj = {
                id: itemId,
                name:even.target.elements.name.value,
                type:even.target.elements.type.value,
                price:parseInt(even.target.elements.price.value)
            }
            // console.log(newObj);
            this.$store.dispatch('addItem',newObj)
            .then( ()=> this.$router.push('home'));
        }
    },
}
</script>

<style scoped>
    .btn{
        background: var(--g-color);
        color: white;
        margin: 1%;
    }
    .box{
        background:white;
        border-radius: 5px;
        margin: 5% auto;
        height: fit-content;
        width: fit-content;
        padding: 15px;
    }
</style>