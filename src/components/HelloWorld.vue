<template>
  <div class="hello" style="background: #f2f2f2;">
    <h1 style="font-size: 20px">{{ msg }}</h1>
    <h2 style="font-size: 16px">Essential Links</h2>
    <h2 id="hq">Essential Links</h2>
    <div>fcasefs</div>
    <van-button loading type="info" loading-text="加载中..." />

    <van-rate v-model="value" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>


    <van-cell title="选择单个日期" :value="date"  is-link @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />

    <div style="background: antiquewhite">
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      date: '',
      show: false,
      value: 3,
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hq {
  font-size: .32rem
}
</style>
