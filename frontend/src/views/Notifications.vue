<template>
  <div>
    <div class="btn_one_class">
      <h1>Notifications</h1>
      <div id="app">
        <button
          class="error"
          @click="flashMessage.error({ title: 'Error Title', message: text })"
        >
          ERROR
        </button>
        <button
          class="warning"
          @click="
            flashMessage.warning({ title: 'Warning Title', message: text })"
        >
          WARNING
        </button>
        <button
          class="success"
          @click="
            flashMessage.success({ title: 'Success Title', message: text })"
        >
          SUCCESS
        </button>
        <button
          class="info"
          @click="flashMessage.info({ title: 'Info Title', message: text })"
        >
          INFO
        </button>
        <button
          class="empty"
          @click="
            flashMessage.error({
              title: 'Message Without Icon',
              message: text,
              icon: false,
              clickable: false,
            })"
        >
          WITHOUT ICON AND UNCKLICKABE
        </button>
        <button
          class="custom"
          @click="
            flashMessage.show(
              {
                title: 'Custom Styled Message',
                message: text,
                flashMessageStyle: customStyle.flashMessageStyle,
                iconStyle: customStyle.iconStyle,
              },
              { mounted: showText, destroyed: clearText }
            )"
        >
          CUSTOM STYLE MESSAGE
        </button>
        <p>{{ callbackText }}</p>
        <FlashMessage></FlashMessage>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum, ligula ac accumsan lobortis, nulla ante pharetra magna, sed sagittis dui metus sit amet lorem. ",
      callbackText: "",
      customStyle: {
        flashMessageStyle: {
          background: "linear-gradient(#e66465, #9198e5)",
        },
        iconStyle: {
          backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIC0zMSA1MTEuOTk5NzcgNTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im00NjQuMDYyNSA0MzAuMzg2NzE5Yy0xMzcuNTU0Njg4IDI1LjI3MzQzNy0yNzguNTY2NDA2IDI1LjI3MzQzNy00MTYuMTI1IDAtMzQuMTY0MDYyLTYuMjgxMjUtNTUuMzU5Mzc1LTQwLjc3NzM0NC00NS41MTk1MzEtNzQuMDg5ODQ0IDkuNDQ5MjE5LTMyIDM3LjQ2NDg0My01NSA3MC42OTE0MDYtNTguMDM5MDYzIDEyMS42NzE4NzUtMTEuMTI1IDI0NC4xMDU0NjktMTEuMTI1IDM2NS43NzczNDQgMCAzMy4yMzA0NjkgMy4wMzkwNjMgNjEuMjQ2MDkzIDI2LjAzOTA2MyA3MC42OTUzMTIgNTguMDM5MDYzIDkuODM5ODQ0IDMzLjMxMjUtMTEuMzU1NDY5IDY3LjgxMjUtNDUuNTE5NTMxIDc0LjA4OTg0NHptMCAwIiBmaWxsPSIjYTc4YzdlIi8+PHBhdGggZD0ibTI3NC41MzkwNjIgNDQ5LjE3NTc4MWMtMTEzLjcxNDg0My0yNC4zNTkzNzUtNzkuNjY3OTY4LTEyNS43NjE3MTktNDIuNjY3OTY4LTE1OS4xMDkzNzUtNTIuOTgwNDY5LjYzNjcxOS0xMDUuOTQxNDA2IDMuMzYzMjgyLTE1OC43NTc4MTMgOC4xOTE0MDYtMzMuMjMwNDY5IDMuMDM5MDYzLTYxLjI0MjE4NyAyNi4wMzkwNjMtNzAuNjk1MzEyIDU4LjAzOTA2My05LjgzOTg0NCAzMy4zMTI1IDExLjM1NTQ2OSA2Ny44MTI1IDQ1LjUyMzQzNyA3NC4wODk4NDQgNzQuODc4OTA2IDEzLjc1NzgxMiAxNTAuNzg1MTU2IDIwLjAwNzgxMiAyMjYuNTk3NjU2IDE4Ljc4OTA2MnptMCAwIiBmaWxsPSIjOTQ3YzcwIi8+PHBhdGggZD0ibTQzOS4yNDYwOTQgMzExLjg0NzY1NmMtMTIxLjE0ODQzOCAyMi4yNjE3MTktMjQ1LjM0Mzc1IDIyLjI2MTcxOS0zNjYuNDkyMTg4IDAtMzAuMDg5ODQ0LTUuNTI3MzQ0LTQ4Ljc1NzgxMi0zNS45MTAxNTYtNDAuMDkzNzUtNjUuMjUgOC4zMjQyMTktMjguMTgzNTk0IDMyLjk5NjA5NC00OC40NDE0MDYgNjIuMjY1NjI1LTUxLjExNzE4NyAxMDcuMTU2MjUtOS43OTY4NzUgMjE0Ljk4ODI4MS05Ljc5Njg3NSAzMjIuMTQ4NDM4IDAgMjkuMjY5NTMxIDIuNjc1NzgxIDUzLjk0MTQwNiAyMi45MzM1OTMgNjIuMjY1NjI1IDUxLjExNzE4NyA4LjY2Nzk2OCAyOS4zMzk4NDQtMTAgNTkuNzIyNjU2LTQwLjA5Mzc1IDY1LjI1em0wIDAiIGZpbGw9IiNkZGFmODkiLz48cGF0aCBkPSJtMjE5Ljg0NzY1NiAxODguNTE5NTMxYy00MS42ODc1Ljg1NTQ2OS04My4zNTU0NjggMy4xNjAxNTctMTI0LjkyMTg3NSA2Ljk2MDkzOC0yOS4yNjU2MjUgMi42NzU3ODEtNTMuOTQxNDA2IDIyLjkzMzU5My02Mi4yNjU2MjUgNTEuMTE3MTg3LTguNjY0MDYyIDI5LjMzOTg0NCAxMC4wMDM5MDYgNTkuNzIyNjU2IDQwLjA5Mzc1IDY1LjI1IDYzLjA3MDMxMyAxMS41ODk4NDQgMTI2Ljk2ODc1IDE3LjEzMjgxMyAxOTAuODI4MTI1IDE2LjY1NjI1LTEwNy4zNzUtMTguNzkyOTY4LTk5LjUtMTAzLjI3MzQzNy00My43MzQzNzUtMTM5Ljk4NDM3NXptMCAwIiBmaWxsPSIjYzlhMDdkIi8+PHBhdGggZD0ibTIwMi43Njk1MzEgMTAzLjEwMTU2MmM1MC43MTg3NS0zLjY2MDE1NiA3MS42MjEwOTQtMzIuNTE1NjI0IDc2LjA5Mzc1LTY0LjQ2ODc1IDEuOTE3OTY5LTEzLjcyMjY1NiAxNi41NjY0MDctMjEuNjMyODEyIDI5LjI1NzgxMy0xNi4wODIwMzEgNjEuMzI4MTI1IDI2LjgxNjQwNyAxMzEuNjEzMjgxIDY3LjgzMjAzMSAxMzEuNjEzMjgxIDEzNS44NzVsLS4wODIwMzEtLjAxOTUzMWMxLjE2NDA2MiAyMC4zNTE1NjItMTIuOTE3OTY5IDM5LjI1LTMzLjkxNzk2OSA0My4xMDkzNzUtOTcuNTU4NTk0IDE3LjkyNTc4MS0xOTcuNTcwMzEzIDE3LjkyNTc4MS0yOTUuMTI4OTA2IDAtMjQuMjM0Mzc1LTQuNDUzMTI1LTM5LjI2NTYyNS0yOC45MTc5NjktMzIuMjg1MTU3LTUyLjU0Njg3NSA2LjcwMzEyNi0yMi42OTUzMTIgMjIuMDA3ODEzLTMxLjQ1NzAzMSA0MC40NTcwMzItMzYuODI0MjE5IDIxLjY0MDYyNS02LjI5Njg3NSA0OC42NzE4NzUtNi40OTYwOTMgODMuOTkyMTg3LTkuMDQyOTY5em0wIDAiIGZpbGw9IiNhNzhjN2UiLz48cGF0aCBkPSJtMjA2LjU4NTkzOCAyODguNTI3MzQ0YzAtMTIuNzEwOTM4LTEyLjkzNzUtMjMuMDExNzE5LTI4Ljg5NDUzMi0yMy4wMTE3MTktMTUuOTYwOTM3IDAtMjguODk0NTMxIDEwLjMwMDc4MS0yOC44OTQ1MzEgMjMuMDExNzE5IDAgMTIuNzA3MDMxIDEyLjkzMzU5NCAyMy4wMTE3MTggMjguODk0NTMxIDIzLjAxMTcxOCAxNS45NTcwMzIgMCAyOC44OTQ1MzItMTAuMzA0Njg3IDI4Ljg5NDUzMi0yMy4wMTE3MTh6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zNjMuMjA3MDMxIDI4OC41MjczNDRjMC0xMi43MTA5MzgtMTIuOTM3NS0yMy4wMTE3MTktMjguODk0NTMxLTIzLjAxMTcxOXMtMjguODk0NTMxIDEwLjMwMDc4MS0yOC44OTQ1MzEgMjMuMDExNzE5YzAgMTIuNzA3MDMxIDEyLjkzNzUgMjMuMDExNzE4IDI4Ljg5NDUzMSAyMy4wMTE3MThzMjguODk0NTMxLTEwLjMwNDY4NyAyOC44OTQ1MzEtMjMuMDExNzE4em0wIDAiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjNDk1MDU5Ij48cGF0aCBkPSJtMTgyLjUxOTUzMSAyNjguODU1NDY5Yy00LjE0MDYyNSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41di0xMi40MDIzNDRjMC00LjE0MDYyNSAzLjM1OTM3NS03LjUgNy41LTcuNXM3LjUgMy4zNTkzNzUgNy41IDcuNXYxMi40MDIzNDRjMCA0LjE0NDUzMS0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwIi8+PHBhdGggZD0ibTI1NiAyOTEuNzgxMjVjLTExLjU2MjUgMC0yMC45MzM1OTQtOS4zNzUtMjAuOTMzNTk0LTIwLjkzMzU5NHYtMTUuMjIyNjU2YzAtMy4xNTYyNSAyLjU1ODU5NC01LjcxNDg0NCA1LjcxNDg0NC01LjcxNDg0NGgzMC40NDE0MDZjMy4xNTYyNSAwIDUuNzE0ODQ0IDIuNTU4NTk0IDUuNzE0ODQ0IDUuNzE0ODQ0djE1LjIyMjY1NmMwIDExLjU1ODU5NC05LjM3NSAyMC45MzM1OTQtMjAuOTM3NSAyMC45MzM1OTR6bTAgMCIvPjxwYXRoIGQ9Im0zMjkuNDgwNDY5IDI2OC44NTU0NjljLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjV2LTEyLjQwMjM0NGMwLTQuMTQwNjI1IDMuMzU5Mzc1LTcuNSA3LjUtNy41IDQuMTQ0NTMxIDAgNy41IDMuMzU5Mzc1IDcuNSA3LjV2MTIuNDAyMzQ0YzAgNC4xNDQ1MzEtMy4zNTU0NjkgNy41LTcuNSA3LjV6bTAgMCIvPjwvZz48cGF0aCBkPSJtMTg3LjAwMzkwNiAxMDQuMTQwNjI1Yy0yNy43NTM5MDYgMS43MTA5MzctNDkuOTI5Njg3IDIuNjc5Njg3LTY4LjIyNjU2MiA4LTE4LjQ0OTIxOSA1LjM3MTA5NC0zMy43NTM5MDYgMTQuMTMyODEzLTQwLjQ1NzAzMiAzNi44MjgxMjUtNi45NzY1NjIgMjMuNjI1IDguMDU0Njg4IDQ4LjA5Mzc1IDMyLjI4NTE1NyA1Mi41NDY4NzUgNTAuNjMyODEyIDkuMzAwNzgxIDEwMS45MjE4NzUgMTMuNzY1NjI1IDE1My4xOTE0MDYgMTMuNDEwMTU2LTEwMi45NDE0MDYtMTUuOTEwMTU2LTEwNS4yNDYwOTQtODIuMTQ4NDM3LTc2Ljc5Mjk2OS0xMTAuNzg1MTU2em0wIDAiIGZpbGw9IiM5NDdjNzAiLz48cGF0aCBkPSJtMTQzLjY3OTY4OCAyOC4wOTM3NWMtNC41MjczNDQgOS43MDMxMjUtMTkuMzg2NzE5IDIxLjAyNzM0NC0yOS4wOTM3NSAxNi41LTkuNzA3MDMyLTQuNTI3MzQ0LTEwLjU4NTkzOC0yMy4xODc1LTYuMDU4NTk0LTMyLjg5MDYyNSA0LjUyNzM0NC05LjcwNzAzMSAxNi4wNjI1LTEzLjkwNjI1IDI1Ljc2OTUzMS05LjM4MjgxMyA5LjcwNzAzMSA0LjUyNzM0NCAxMy45MDYyNSAxNi4wNjY0MDcgOS4zODI4MTMgMjUuNzczNDM4em0wIDAiIGZpbGw9IiNlM2UyZTEiLz48cGF0aCBkPSJtOTEuMzA0Njg4IDE3Ljk2ODc1YzkuNzAzMTI0IDQuNTI3MzQ0IDIxLjAyNzM0MyAxOS4zODY3MTkgMTYuNSAyOS4wOTM3NS00LjUyNzM0NCA5LjcwNzAzMS0yMy4xODc1IDEwLjU4NTkzOC0zMi44OTQ1MzIgNi4wNTg1OTQtOS43MDcwMzEtNC41MjczNDQtMTMuOTAyMzQ0LTE2LjA2MjUtOS4zNzg5MDYtMjUuNzY5NTMyIDQuNTI3MzQ0LTkuNzA3MDMxIDE2LjA2NjQwNi0xMy45MDYyNSAyNS43NzM0MzgtOS4zODI4MTJ6bTAgMCIgZmlsbD0iI2UzZTJlMSIvPjxwYXRoIGQ9Im0xMzMuMzQzNzUgNDkuMjE4NzVjMCAxMS41NTA3ODEtOS4zNjMyODEgMjAuOTE0MDYyLTIwLjkxNDA2MiAyMC45MTQwNjItMTEuNTUwNzgyIDAtMjAuOTE0MDYzLTkuMzYzMjgxLTIwLjkxNDA2My0yMC45MTQwNjJzOS4zNjMyODEtMjAuOTE0MDYyIDIwLjkxNDA2My0yMC45MTQwNjJjMTEuNTUwNzgxIDAgMjAuOTE0MDYyIDkuMzYzMjgxIDIwLjkxNDA2MiAyMC45MTQwNjJ6bTAgMCIgZmlsbD0iIzQ5NTA1OSIvPjxwYXRoIGQ9Im00NDMuMjk2ODc1IDEyNS41NzQyMTljLTEwLjcwNzAzMSAwLTI3LjI1LTguNjgzNTk0LTI3LjI1LTE5LjM5NDUzMSAwLTEwLjcwNzAzMiAxNi41NDI5NjktMTkuMzkwNjI2IDI3LjI1LTE5LjM5MDYyNiAxMC43MTA5MzcgMCAxOS4zOTQ1MzEgOC42ODM1OTQgMTkuMzk0NTMxIDE5LjM5MDYyNiAwIDEwLjcxMDkzNy04LjY4MzU5NCAxOS4zOTQ1MzEtMTkuMzk0NTMxIDE5LjM5NDUzMXptMCAwIiBmaWxsPSIjZTNlMmUxIi8+PHBhdGggZD0ibTQzMC4zMzU5MzggNzMuODI4MTI1YzAgMTAuNzEwOTM3LTguNjc5Njg4IDI3LjI1LTE5LjM5MDYyNiAyNy4yNS0xMC43MTA5MzcgMC0xOS4zOTA2MjQtMTYuNTM5MDYzLTE5LjM5MDYyNC0yNy4yNXM4LjY3OTY4Ny0xOS4zOTA2MjUgMTkuMzkwNjI0LTE5LjM5MDYyNWMxMC43MTA5MzggMCAxOS4zOTA2MjYgOC42Nzk2ODggMTkuMzkwNjI2IDE5LjM5MDYyNXptMCAwIiBmaWxsPSIjZTNlMmUxIi8+PHBhdGggZD0ibTQzMS44NTkzNzUgMTA2LjE3OTY4OGMwIDExLjU1MDc4MS05LjM2MzI4MSAyMC45MTQwNjItMjAuOTE0MDYzIDIwLjkxNDA2Mi0xMS41NTA3ODEgMC0yMC45MTQwNjItOS4zNjMyODEtMjAuOTE0MDYyLTIwLjkxNDA2MiAwLTExLjU0Njg3NiA5LjM2MzI4MS0yMC45MTAxNTcgMjAuOTE0MDYyLTIwLjkxMDE1NyAxMS41NTA3ODIgMCAyMC45MTQwNjMgOS4zNjMyODEgMjAuOTE0MDYzIDIwLjkxMDE1N3ptMCAwIiBmaWxsPSIjNDk1MDU5Ii8+PC9zdmc+)`,
        },
      },
    };
  },

  methods: {
    showText() {
      this.callbackText = "Hello from callback! FlashMessage is appear";
    },
    clearText() {
      this.callbackText = "My time has passed! I will disappear in 3 second...";
      setTimeout(() => (this.callbackText = ""), 3000);
    },
  },
};
</script>

<style scoped>
button {
  font-weight: bold;
  display: block;
  margin-bottom: 20px;
  max-width: 50%;
  width: 50%;
  padding: 10px;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
}

button.error {
  background-color: rgba(241, 34, 34, 0.68);
  border-color: #f12222;
}

button.warning {
  background-color: rgba(241, 139, 34, 0.68);
  border-color: #f18b22;
}

button.success {
  background-color: rgba(1, 148, 122, 0.68);
  border-color: #01947a;
}

button.info {
  background-color: rgba(16, 135, 194, 0.68);
  border-color: #1087c2;
}

button.empty {
  background-color: #fff;
  border-color: #1087c2;
}

button.custom {
  background: linear-gradient(0.2turn, #e66465, #9198e5);
  border-color: #e66465;
  color: #fff;
}
</style>
