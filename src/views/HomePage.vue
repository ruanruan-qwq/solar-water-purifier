<template>
    <div>
        <header class="header">
            <div class="header_top">
                <div class="content">
                    <div class="content_left">
                        <div class="mail">
                            <img src="../assets/邮件.png" alt="mail" class="mail_lcon">
                            <article class="Message_content">may@samkingpump.com</article>
                        </div>

                        <div class="telephone">
                            <img src="../assets/电话.png" alt="telephone" class="mail_lcon">
                            <article class="Message_content">+8618702181182</article>
                        </div>
                    </div>

                    <div class="content-right">
                        <div>
                            <img src="../assets/APP.png" alt="App" class="app_Icon">
                            <article class="Whatsapp">Whatsapp</article>
                            <img src="../assets/三角形.png" alt="Expand more" class="expand_more">
                        </div>
                        <div class="content_right_number2">
                            <li class="Separator">|</li>
                            <img src="../assets/facebook.png" alt="fasebook" class="facebook_lcon">
                            <article class="Whatsapp">Facebook</article>
                        </div>
                        <div>
                            <li class="Separator">|</li>
                            <img src="../assets/linkedin.png" alt="linkedin" class="facebook_lcon">
                            <article class="Whatsapp">Linkedin</article>
                        </div>
                        <div>
                            <li class="Separator">|</li>
                            <img src="../assets/USA.png" alt="USA" class="facebook_lcon">
                            <article class="Whatsapp">EN</article>
                            <img src="../assets/三角形.png" alt="Expand more" class="expand_more">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="header_bottom">
                <img src="../assets/SAMKING.png" alt="SAMKING" class="SAMKING_style">
                <nav class="nav">
                    <a href="" class="nav_a">HOME</a>
                    <a href="" class="nav_a">PRODUCTS</a>
                    <a href="" class="nav_a">CASE</a>
                    <a href="" class="nav_ABOUT">ABOUT</a>
                    <img src="../assets/黑色三角形.png" alt="" class="expand_more_black">
                    <a href="" class="nav_a">CONTACT US</a>
                </nav>
                <img src="	https://samkingpump.com/Public/img/6ab73991c3855a8979de85e80354567.png" alt="vr" class="vr_style">
                <img src="	https://samkingpump.com/Public/img/676_32.jpg" alt="search" class="serch_style">
                <button class="button_style">Online Inquiry</button>
            </div>
        </header>

        <main>
            <a-carousel autoplay>
                <div><h3><img src="../assets/背景图1.png" alt="" class="Background_image_style"></h3></div>
                <div><h3><img src="../assets/背景图2.png" alt="" class="Background_image_style"></h3></div>
                <div><h3><img src="../assets/背景图3.png" alt="" class="Background_image_style"></h3></div>
                <div><h3><img src="../assets/背景图4.png" alt="" class="Background_image_style"></h3></div>
            </a-carousel>

            <article class="TOP_SALE">TOP SALE</article>

            <div class="commodity_div" id="Commodity_div1">
                <div class="commodity_div_style">
                    <img src="../assets/商品图.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                    <article class="commodity_text_style">3SPN 1-14P</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图2.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                     <article class="commodity_text_style">3SPN 1-8P</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图3.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                     <article class="commodity_text_style">4SP2-48</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图4.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                     <article class="commodity_text_style">4SPF2.8-140</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图5.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                     <article class="commodity_text_style">4SP3-18</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图6.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                     <article class="commodity_text_style">4SPW 5-8</article>
                </div>
            </div>

            <div class="commodity_div" id="Commodity_div2">
                <div class="commodity_div_style">
                    <img src="../assets/商品图7.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                    <article class="commodity_text_style">4SPW 2-11</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图8.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                    <article class="commodity_text_style">4SPN 2-17P</article>
                </div>
                <div class="commodity_div_style">
                    <img src="../assets/商品图9.png" alt="" class="commodity_style">
                    <div class="commodity_div1_style"></div>
                    <article class="commodity_text_style">4SPN 2-11P</article>
                </div>
            </div>

            <!-- 切换按钮 -->
            <div v-on:click="ListButton1" class="list_button" id="list_button1"></div>
            <div v-on:click="ListButton2" class="list_button1" id="list_button2"></div>

            
            <!-- 蓝色背景 -->
            <div class="Blue_background">
                <div class="Blue_background_style1">
                    <div class="First_paragraph">
                        <article class="First_paragraph_text1">15</article>
                        <article class="First_paragraph_text2">Years</article>
                    </div>
                    
                    <div class="First_paragraph">
                        <article class="First_paragraph_text3">Industrial experience</article>
                    </div>
                    
                    <div class="First_paragraph">
                        <article class="First_paragraph_text4">More than 15 years experience in R & D and</article>
                        <article class="First_paragraph_text5">manufacturing of solar pump</article>
                    </div>
                </div>

                <div class="Vertical_line_style"></div>

                <div class="Vertical_line_style2">
                    <div class="Blue_background_style2">
                        <article class="First_paragraph_text1">11</article>
                        <article class="First_paragraph_text2">Items</article>
                    </div>
                    <div>
                        <article class="First_paragraph_text3">Patented technology</article>
                    </div>
                    <div>
                        <article class="First_paragraph_text4">Have an independent R & D team, strong R &</article>
                        <article class="First_paragraph_text5">D capabilities</article>
                    </div>
                </div>

                <div class="Vertical_line_style"></div>

                <div class="Vertical_line_style3">
                    <div class="Blue_background_style2">
                        <article class="First_paragraph_text1">1000</article>
                        <article class="First_paragraph_text2">+</article>
                    </div>
                    <div>
                        <article class="First_paragraph_text3">Overseas customers</article>
                    </div>
                    <div>
                        <article class="First_paragraph_text4">Served more than 1000 overseas customers</article>
                        <article class="First_paragraph_text5">around the world</article>
                    </div>
                </div>
            </div>

            <!-- 制作图 -->
            <div>
                <article class="TOP_SALE">OUR ADVANTAGES</article>
                <div>
                    <div>
                        <img src="../assets/制作图1.png" alt="" class="Fabrication_drawing_style"/>
                        <div class="text_Fabrication_drawing_style">
                            <article class="text_Fabrication_drawing_style_text1">Competitive price</article>
                            <article class="text_Fabrication_drawing_style_text2">We are a leading R & D and manufacturer of solar water pumps</article>
                            <article class="text_Fabrication_drawing_style_text3">in China, with dozens of patented technologies, large-scale</article>
                            <article class="text_Fabrication_drawing_style_text4">standardized production, direct sales and more competitive</article>
                            <article class="text_Fabrication_drawing_style_text5">prices.</article>
                        </div>
                    </div>

                    <div>
                        
                        <div class="text_Fabrication_drawing_style1">
                            <article class="text_Fabrication_drawing_style_text1">CReliable quality</article>
                            <article class="text_Fabrication_drawing_style_text2">The company has passed ISO9001 & ISO14001 certification, and</article>
                            <article class="text_Fabrication_drawing_style_text3">the products have passed CE / TUV SUD / SGS quality inspection,</article>
                            <article class="text_Fabrication_drawing_style_text4">with excellent quality and reliable performance.</article>
                        </div>
                        <img src="../assets/制作图2.png" alt="" class="Fabrication_drawing_style"/>
                    </div>

                     <div>
                        <img src="../assets/制作图3.png" alt="" class="Fabrication_drawing_style"/>
                        <div class="text_Fabrication_drawing_style">
                            <article class="text_Fabrication_drawing_style_text1">Customized on demand</article>
                            <article class="text_Fabrication_drawing_style_text2">We provide nearly 500 kinds of solar pump models, including DC,</article>
                            <article class="text_Fabrication_drawing_style_text3">pumps, and can provide customized services according to the</article>
                            <article class="text_Fabrication_drawing_style_text4">needs of customers.</article>
                        </div>
                    </div>

                     <div>
                        
                        <div class="text_Fabrication_drawing_style1">
                            <article class="text_Fabrication_drawing_style_text1">Fast delivery</article>
                            <article class="text_Fabrication_drawing_style_text2">We have a complete R & D, manufacturing and quality testing,</article>
                            <article class="text_Fabrication_drawing_style_text3">twarehousing and logistics links, stable production capacity,</article>
                            <article class="text_Fabrication_drawing_style_text4">efficient order processing capacity, to meet the needs of</article>
                            <article class="text_Fabrication_drawing_style_text4">customers for rapid delivery.</article>
                        </div>
                        <img src="../assets/制作图4.png" alt="" class="Fabrication_drawing_style"/>
                    </div>
                </div>

                
            </div>
        </main>
    </div>
</template>


<script>

// 轮播图
export default {
  methods: {
    ListButton1: function () {
        document.getElementById('Commodity_div2').style.display="none";
        document.getElementById('Commodity_div1').style.display="block";
        document.getElementById('list_button1').style.backgroundColor="orange"
        document.getElementById('list_button2').style.backgroundColor="white"
    },

    ListButton2: function () {
        document.getElementById('Commodity_div1').style.display="none";
        document.getElementById('Commodity_div2').style.display="block";
        document.getElementById('list_button2').style.backgroundColor="orange"
        document.getElementById('list_button1').style.backgroundColor="white"
    }
  },
};




</script>


<style scoped>

body{
    margin: 0;
}
 
 .header{
    margin-top: 0;
    background-color: white;
    width: 100%;
    height: 100px;
 }

 .content{
    display: flex;
    align-items: center;
    padding-top: 10px;
    margin-left: 136px;
 }

 .header_top{
    background-color: black;
    height: 50px;
 }

 .content_left{
    display: inherit;
 }

  .mail{
    background-color: black;
    display: inline-block;
    /* .flex布局 */
    /* 对单行弹性盒子模型使用可以使用 */
 }

 .mail_lcon{
    width: 17px;
    height: 19px;
    /* vertical-align属性设置一个元素的垂直对齐。 */
    vertical-align: middle;
 }

.Message_content{
    color: white;
    display: inline-block;
    font-size: 1px;
    font-family: 'Microsoft YaHei';
    margin: 0 30px 0 10px;
}

.telephone{
    background-color: black;
}

.content-right{
    display: inline-flex;
    margin-left: 450px;
}

.app_Icon{
    width: 17px;
    height: 19px;
    vertical-align: middle;
    border-radius: 3px;
}
.Whatsapp{
    color: white;
    display: inline-block;
    font-size: 1px;
    font-family: 'Microsoft YaHei';
    margin: 0 6px;
}
.Separator{
    color: white;
    display: inline-block;
    font-size: 1px;
    font-family: 'Microsoft YaHei';
    margin: 0 19px;
}

.expand_more{
    width: 10px;
    height: 12px;
    vertical-align: sub;
}

.facebook_lcon{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.content_right_number2{
    display: inline-block;
}

 .header_bottom{
    padding-left: 136px;
    padding-top: 10px;
    position: relative;
 }

 .SAMKING_style{
    height: 55px;
    width: 224px;
    position: absolute;
    left: 134px;
 }

 .nav{
    display: inline-block;
    margin-top: -10px;
    font-size: 13px;
    position: absolute;
    left: 587px;
 }

 .nav_a{
    padding: 0 16px;
    letter-spacing: 1px;
    color: black;
    text-decoration: none;
    font-weight: 100;
 }

 .nav_a:active{
    color: orange;
 }

 .nav_ABOUT{
    padding: 0 5px 0 13px;
    letter-spacing: 1px;
    color: black;
    text-decoration: none;
    color: black;
    font-weight: 100;
 }

 .expand_more_black{
    width: 10px;
    height: 12px;
    vertical-align: sub;
    margin-bottom: 2px;
    margin-right: 13px;
 }

 .vr_style{
    width: 49px;
    position: absolute;
    right: 361px;
    top: 24px;
 }

 .serch_style{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 319px;
    top: 27px;
 }

 .button_style{
    background-color: orange;
    width: 160px;
    height: 46px;
    color: white;
    border-radius: 4px;
    font-weight: 700;
    font-size: 15px;
    border: 0;
    padding: 0;
    vertical-align: top;
    margin-top: 5px;
    margin-left: 975px;
    position: relative;
 }

 .button_style::after{
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 0px;
    height: 0px;
    border-bottom: 46px solid rgb(251, 141, 16);
    border-left: 19px solid orange;
    border-bottom-right-radius: 4px;
 }

 .Rotation_Img{
    width: 100%;
    height: 617px;
 }

 .img_Rotation_div_ul{
    padding: 0;
    margin: 0;
 }

 .img_Rotation_div ol {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5,75px);
  grid-template-rows: auto;
  grid-gap: 1em;gap: 1em;
  float: right;
  margin-top: 450px;
  list-style: none;
  top:0;left:0;
}

.img_Rotation_div ol li {
  width: 25px;
  height: 10px;
  font-size: 15px;
  line-height: 20px;
  float: left;
  text-align: center;
  border-radius: 2em;
  border: 5px solid #999999;
}





.bannerimg{
  width: 100%;
  height: inherit;
}

.TOP_SALE{
    letter-spacing:5px;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
    margin: 50px 0;
}


.commodity_style{
    width: 450px;
    height: 450px;
}

.commodity_div{
    margin-left: 50px;
}

.commodity_div_style{
    display: inline-block;
    border: 5px solid #d9d6d6;
    margin-right: 20px;
    margin-bottom: 20px;
    position: relative;
}

.commodity_div_style:hover{
    border-color: orange;
}

.commodity_div_style:hover
.commodity_div1_style{
    background-color: orange;
    border-color: orange;
}

.commodity_div1_style{
    background-color: rgba(0,0,0,.2);
    position: absolute;
    width: 460px;
    height: 129px;
    bottom: -5px;
    left: -1%;
}

.commodity_text_style{
    color: white;
    position: absolute;
    bottom: 49px;
    left: 44%;
    font-size: 20px;
}

.list_button{
    width: 20px;
    height: 20px;
    display: inline-block;
    border: 1px solid orange;
    border-radius: 50%;
    margin-left: 17px;
    background-color: orange;
}

.list_button1{
    width: 20px;
    height: 20px;
    background-color: white;
    display: inline-block;
    border: 1px solid orange;
    border-radius: 50%;
    margin-left: 20px;
}

#Commodity_div2{
    display: none;
}

.Background_image_style{
    margin-top: 35px;
    width: 100%;
    height: 600px;
}

.ant-carousel >>> .slick-dots li button {
    height: 7px;
    width: 40px;
    background-color: white;
    padding-right: 74px;
}

.ant-carousel >>> .slick-dots-bottom {
    bottom: 36px;
}

.Blue_background{
    width: 100%;
    height: 300px;
    background-color: rgb(71, 135, 231);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
}


.Blue_background_style1{
    display: inline-block;
}

.First_paragraph_text1{
    font-size: 63px;
    display: inline-block;
    color: white;
    font-weight: 600;
}

.First_paragraph_text2{
    font-size: 63px;
    display: inline-block;
    color: orange;
    font-weight: 600;
}

.First_paragraph_text3{
    font-size: 26px;
    margin-top: -20px;
    color: orange;
    margin-left: -7px;
}

.First_paragraph_text4{
    color: white;
    font-size: 15px;
    margin-top: 10px;
}

.First_paragraph_text5{
    color: white;
    font-size: 15px;
}

.Vertical_line_style{
    background-color: white;
    width: 1px;
    height: 215px;
}

.Blue_background_style1{
    margin-left: 162px;
}

.Vertical_line_style3{
    margin-right: 136px;
}

.Fabrication_drawing_style{
    height: 300px;
    vertical-align: bottom;
}



.text_Fabrication_drawing_style{
    display: inline-block;
    width: 600px;
    height: 300px;
    background-color: rgba(206, 197, 197, 0.988);
}

.text_Fabrication_drawing_style::before{
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 0px;
    height: 0px;
    border-bottom: 46px solid rgb(251, 141, 16);
    border-left: 19px solid orange;
    border-bottom-right-radius: 4px;
}

.text_Fabrication_drawing_style1{
    display: inline-block;
    width: 600px;
    height: 300px;
    background-color: orange;
}

.text_Fabrication_drawing_style_text1{
    font-size: 31px;
    margin-top: 35px;
    margin-bottom: 40px;
}

.text_Fabrication_drawing_style_text2{
    font-size: 18px;
}

.text_Fabrication_drawing_style_text3{
    font-size: 18px;
    margin-left: -33px;
}


.text_Fabrication_drawing_style_text4{
    font-size: 18px;
    margin-left: -33px;
}


.text_Fabrication_drawing_style_text5{
    font-size: 18px;
    margin-left: -447px;
}



 



</style>