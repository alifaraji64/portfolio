<template>
<main>
    <hr>
    <footer>
        <p>ali faraji &#169; all rights reserved</p>
        <div class="links">
            <a href="https://www.instagram.com/coding_eagle">
               <i class="fab fa-instagram fa-2x"></i>
            </a >
            <a href="https://codepen.io/ali-faraji-dev">
                <i class="fab fa-codepen fa-2x"></i>
            </a >
            <a href="https://github.com/alifaraji64">
                <i class="fab fa-github fa-2x"></i>
            </a>

        </div>
    </footer>
</main>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
footer{
    text-align: center;
    padding-bottom: 10px;
    div{
        display: flex;
        width:130px;
        margin:0 auto;
        justify-content: space-around;
        margin-top:10px;
        cursor: pointer;
        a{
            padding:5px;
            border-radius: 50%;
            transition: background 0.4s;
            &:hover{
                background-color: rgb(255, 89, 122);
            }
        }
    }
}
</style>