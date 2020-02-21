<template>
  <div id="app">
    <Header />
    <div class="wrap">
      <div id="nav" class="menu">
        <ul>
          <li>
            <router-link to="/">
              <span class="item_icon"><svg width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" d="M6 20h12a2 2 0 0 0 2-2v-4h-4.4l-.635 1.41a1 1 0 0 1-.912.59H9.947a1 1 0 0 1-.912-.59L8.4 14H4v4a2 2 0 0 0 2 2z"></path><path stroke="currentColor" d="M4.526 13.004a.5.5 0 0 0-.026.158V18A1.5 1.5 0 0 0 6 19.5h12a1.5 1.5 0 0 0 1.5-1.5v-4.838a.5.5 0 0 0-.026-.158l-2.16-6.478A1.5 1.5 0 0 0 15.893 5.5H8.108a1.5 1.5 0 0 0-1.423 1.026l-2.16 6.478z"></path></g></svg></span>
              관리함 
              <span class="item_counter">{{ this.$store.getters.completedNum }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/today">
              <span class="item_icon" style="position: relative; top: 1px;"><svg width="24" height="24"><g fill="currentColor" fill-rule="evenodd"><path d="M20 8v9.436c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 0 1-.756.757c-.326.174-.65.267-1.54.267H6.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 1 0V4h8V2.5a.5.5 0 1 1 1 0V4h1a2 2 0 0 1 2 2v2zM6.564 8c-.662 0-.864.039-1.07.149a.818.818 0 0 0-.345.346C5.039 8.7 5 8.902 5 9.564v7.872c0 .662.039.864.149 1.07a.818.818 0 0 0 .346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 0 0 .345-.346c.11-.205.149-.407.149-1.069V9.564c0-.662-.039-.864-.149-1.07a.818.818 0 0 0-.346-.345C18.3 8.039 18.098 8 17.436 8H6.564z"></path><text font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" font-size="9" transform="translate(4 2)"><tspan x="7.7" y="14.5" text-anchor="middle">15</tspan></text></g></svg></span>
              오늘
            </router-link>
          </li>
          <li>
            <router-link to="/week">
              <span class="item_icon" style="position: relative; top: 1px;"><svg width="24" height="24"><path fill="currentColor" fill-rule="evenodd" d="M20 8v9.436c0 .892-.093 1.215-.267 1.54a1.81 1.81 0 0 1-.756.757c-.326.174-.65.267-1.54.267H6.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V6a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 1 0V4h8V2.5a.5.5 0 1 1 1 0V4h1a2 2 0 0 1 2 2v2zM6.564 8c-.662 0-.864.039-1.07.149a.818.818 0 0 0-.345.346C5.039 8.7 5 8.902 5 9.564v7.872c0 .662.039.864.149 1.07a.818.818 0 0 0 .346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 0 0 .345-.346c.11-.205.149-.407.149-1.069V9.564c0-.662-.039-.864-.149-1.07a.818.818 0 0 0-.346-.345C18.3 8.039 18.098 8 17.436 8H6.564zM8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg></span>
              다음 7일
            </router-link>
          </li>
        </ul>        
      </div>
      <article class="contents">
        <router-view/>
      </article>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>


<style>
/* reset */
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,a,address,em,img,strong,
dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,video{
  margin:0;padding:0;font-size:100%;border:0;vertical-align:baseline
}
html{overflow-y:scroll}
body {
  color:#000;font-size:12px;line-height:1.5;
  font-family:"맑은 고딕",malgun gothic, dotum,Helvetica,'Apple SD Gothic Neo',sans-serif;
  background:#fafafa;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased
}
address,em{font-style:normal}
input{color:#000;font-size:12px;padding:0;margin:0}
legend,.blind{position:absolute;font-size:0;visibility:hidden}
ol,ul{list-style:none}
a{text-decoration:none}
a:hover{text-decoration:underline;cursor:pointer}
img{vertical-align:top}
/* reset */

.wrap{
  display: flex;
  min-height: calc(100vh - 5vh);
  width:960px;
  margin:0 auto;
  padding-top:45px;
}
.contents{
  flex: 1;
  background-color: #fff;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  padding: 30px 25px 12px 30px;
}

.menu {
  flex: 0 0 265px;
  width: 265px;
  padding-left: 30px;
  padding-top: 50px;
}

.menu li {
  line-height:22px;
  font-size: 14px;
  color: #333;
  list-style: none;
  cursor: pointer;
  -webkit-transition: color .1s ease-in,background-color .1s ease-in;
  transition: color .1s ease-in,background-color .1s ease-in;
  line-height: 1.25;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.menu a {
  display: block;
  width:100%;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  list-style: none;
  border-radius: 3px;
  padding: 9px 16px 9px 5px;
}
.menu a.router-link-exact-active {
  background: #fff;
  font-weight: bold;
}
.menu li .item_icon {
  width: 28px;
  vertical-align: -6px;
  margin-right: 5px;
  font-size: 14px;
}
.item_counter {
    display: inline-block;
    color: #777;
    font-size: 11px;
    margin-left: 5px;
}
.light_icon {
  color: #fff;
}
</style>
