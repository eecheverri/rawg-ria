import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* Reiniciar estilos */
 *{
     margin:0;
     padding:0;
     box-sizing:border-box;
 }

 body {
     font-family: "Roboto",sans-serif;
     width:100%;     
 }

 hr {
     width: 80%;
     opacity: .5;
     
 }

 h1 {
    font-size:2.8rem;
}

 h2 {
     color: #F7F7FF;
     font-size:2.5rem;
     font-family: 'Roboto', cursive;
     font-weight:lighter;
 }

 h3 {
     font-size:1.3rem;
     color:#F7F7FF;
     font-family: 'Roboto', cursive;
     padding:1.5rem 0rem;
 }

 p{
     font-size:1.2rem;
     line-height:200%;
     color:#696969;
 }

 a{
     text-decoration:none;
     color:#333;
 }

 img{
     display:block;
 }

 input{
     font-weight:bold;
     font-family:"Roboto",sans-serif;
 }

`;

export default GlobalStyles;
