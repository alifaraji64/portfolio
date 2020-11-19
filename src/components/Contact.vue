<template>
  <main>
    <h1 id="contact" class="text-xl black">Contact</h1>
    <hr />
    <div>
      <form action="mailto:alifaraji65452@gmail.com" method="post" enctype="text/plain">>
        <h3 class="text-lg bold">CONTACT</h3>
        <input type="text" placeholder="Your Name" name="name"/>
        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="message"
        ></textarea>
        <button class="text-md bold" type="submit">SEND</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
main {
  width: 100%;
  margin: 5rem 0 0rem 0;
  #contact {
    text-align: center;
  }
  div {
    position: relative;
    max-width: 400px;
    left: 50%;
    transform: translate(-50%, -0);
    form {
      max-height: 420px;
      max-width: 400px;
      min-width:330px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      &::before {
        content: "";
        background: linear-gradient(
          45deg,
          #fd1d1d,
          #d62976,
          #4f5bd5,
          rgb(23, 23, 255),
          #7a00ff,
          #962fbf
        );
        background-size: 400%;
        position: absolute;
        top: -2px;
        left: -2px;
        width: 100%;
        height: 100%;
        animation: moving-gradient 13s linear infinite;
        border-radius: 10px;
      }
      h3 {
        position: relative;
        letter-spacing: 1px;
        color: white;
      }
      input,
      textarea {
        position: relative;
        width: 250px;
        margin-top: 30px;
        background: transparent;
        outline: none;
        padding: 13px;
        border-radius: 30px;
        box-shadow: 0 0 10px #eee;
        border: 0;
        transition: box-shadow 0.5s ease;
        color: white;
        &::placeholder {
          color: white;
          opacity: 0.8;
        }
      }
      button {
        padding: 5px 30px;
        margin-top: 50px;
        background: transparent;
        border-radius: 10px;
        box-shadow: 0 0 10px #eee;
        position: relative;
        cursor: pointer;
        transition: box-shadow 0.5s ease;
        color: white;
      }
      input:focus,
      button:hover,
      textarea:focus {
        box-shadow: 0 0 30px #eee;
      }
    }
  }
}
@keyframes moving-gradient {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>