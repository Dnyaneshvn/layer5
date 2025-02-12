import styled from "styled-components";
export const HandbookWrapper = styled.div`

    .highlight{
      font-weight: 600;
    }

    .content{
      width:100%;
      padding-bottom: 2rem;
      ul > li {
        color: ${(props) => props.theme.text};
      }
      ol > li {
        color: ${(props) => props.theme.menuColor};
      }
      ul > li > span {
        color: ${(props) => props.theme.text};
      }
      ol > li > span {
        color: ${(props) => props.theme.text};
      }
    }

    h2 h3{
      margin: 0.5rem 0;
      color: ${(props) => props.theme.tertiaryColor};
    }

    .page-section{
      h2{
        padding-top: 7rem;
        margin-top: -7rem;
      }
      h3{
        padding-top: 7rem;
        margin-top: -7rem;
      }
      margin-top: -36rem;
      margin-left: 20rem;
      display: flex;
    }

    .sidebar {
        margin: 0;
        padding: 0;
        width: 250px;
        background-color:${(props) => props.theme.secondaryLightColor};
        position: absolute;
        height: 150rem;
        overflow: auto;
    }

    .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
    }

    .sidebar a.active {
        background-color: ${(props) => props.theme.primaryLightColorTwo};
        color: white;
    }

    .sidebar a:hover:not(.active) {
        background-color:${(props) => props.theme.secondaryLightColor};
        color: white;
    }

    .page-header-section {
      height: 10rem;
      text-align: center;
      background: rgb(71,126,150);
      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
      h1 {
          line-height: 10rem;
          color: white;
      }
    }

    .community-home-subtitle {
      text-align: center;
      padding-top: 3rem;
      padding-bottom: 1.5rem;
    }

    #sign-off{
      padding-bottom: 4rem;
    }

    table {
      border-collapse: collapse;
      width: 98%;
      margin: 1rem 0 2rem 0;
      .github-icon{
        height: 1.7rem;
        width:auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
      }
      .site-icon{
        height: 1.6rem;
        width:auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .inline {
        display: inline;
        vertical-align: bottom;
      }
    }

    td, th {
      border: 0.05rem solid ${(props) => props.theme.primaryLightColor};
      text-align: left;
      padding: 0.5rem;
    }

    .linkscol{
      text-align: center;
      width:8%;
    }

    tbody:nth-child(even) {
      background-color: ${(props) => props.theme.secondaryLightColorTwo};
    }

    .codes{
      width:75%
      margin-top:-2rem;
    }

    .community-home-container{
      padding: 1rem 0;
      padding-bottom: 4rem;
      display: flex;
      flex-wrap : wrap;
      align-items : center;
      justify-content: center;
    }

    p{
      margin-top: 10px;
    }

    input[type=checkbox] + label {
      display: block;
      margin: 0.2em;
      cursor: pointer;
      padding: 0.2em;
    }

    input[type=checkbox] {
      display: none;
    }

    input[type=checkbox] + label:before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');;
      border: 0.1em solid #000;
      border-radius: 0.2em;
      display: inline-block;
      width: 1.3em;
      height: 1.3em;
      padding-left: 0.2em;
      padding-bottom: 0.3em;
      margin-right: 0.5em;

      margin-bottom: 0.15em;
      vertical-align: bottom;
      color: transparent;
      background-color: white;
    }

    input[type=checkbox] + label:active:before {
      transform: scale(0);
    }
    rect {
      fill:  ${props => props.theme.DarkTheme ? "#313131" : "#C9FCF6"};  
    }
    path {
      stroke: ${props => props.theme.DarkTheme ? props.theme.keppelColor : "#00B39F"};
    }
    svg {
      color: "red";
    }
    input[type=checkbox]:checked + label:before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');;

      background-color: ${(props) => props.theme.keppelColor};
      border-color: ${(props) => props.theme.primaryLightColorTwo};
      color: #fff;
    }

    input[type=checkbox]:disabled + label:before {
      transform: scale(1);
      border-color: #aaa;
    }

    input[type=checkbox]:checked:disabled + label:before {
      transform: scale(1);
      background-color: ${(props) => props.theme.secondaryLightColor};
      border-color: ${(props) => props.theme.secondaryLightColor};
    }

    .project-org-list{
      a{
      margin-right .3rem;
      }
      img{
        height: auto;
        width: 1.6rem;
        vertical-align: middle;
      }
    }

    .project-description-icon{
      width: 3%;
      transform : translate(0,25%);
      margin: 0 0.3%;
    }

    .project-title-icon{
      margin-left:"10%";
      width: 4%;
      align: left;
      transform : translate(0,28%);
    }

    @media only screen and (max-width: 750px){
      .page-section{
        margin-top: -2rem;
        margin-left: 0;
        padding: 1rem 2.5rem;
      
        .table-container {
          table {
            width: 100%;
            margin-left: 0;
          }
          overflow-x: scroll;
        }
    
        .table-container::-webkit-scrollbar { 
          display: none;
        }
      }
      
      .codes{
        width:100%
        margin-top:-2rem;
      }
    }

    @media only screen and (max-width: 475px){
      .page-header-section h1{
        padding: 0 1rem;
        line-height: 3rem;
        padding-top: 4rem;
      }
      .page-section{
        margin-top: -2rem;
        margin-left: 0rem;
      }
      table{
        margin-left: -1.5rem;
      }
      .frontendTable{
        margin-left: -2.8rem;
      }
    }

    @media only screen and (max-width: 1024px){
      .project-title-icon{
        width:5.5%;
        transform : translate(0,23%);
      }
      .project-description-icon{
        width:4%;
      }
    }

    @media only screen and (max-width: 768px){
      .project-title-icon{
        width:8.5%;
      }
      .project-description-icon{
        width:7%;
      }
    }

    @media only screen and (max-width: 425px){
      .project-title-icon{
        width:11%;
        transform: translate(0,25%)
      }
      .project-description-icon{
        width:8%;
      }
    }

    @media only screen and (max-width: 375px){
      .project-title-icon{
        width:13%;
        transform : translate(0,20%)
      }
      .project-description-icon{
        width:10%;
      }
    }

    .channels-list {
      padding-left: 40px;
    }

    .channels-img {
      width: 40px;
      height: 30px;
    }

    .channels-para {
      display: flex;
      align-items: flex-end;
    }

    .newcomers-journey{
      text-align: center;
      display: flex;
      align-items: center;
      margin: 2.5rem 5rem 3rem 0rem;
      @media only screen and (max-width: 992px){
        width: 100%;
      }
      h2{
        margin-bottom: 2rem;
      }
    }

    .heading{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .heading-start{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      margin-right: 2rem;
      margin-top: -2rem;
      h5{
      font-size: 1.125rem;
      font-weight: 400;
      margin-right: 1rem;
      }
      img{
      height: 3rem;
      width: 4rem;
      transition: .5s;
      }
      img:hover{
      padding-left: 1rem;
      transition: .5s;
      }
    }

  .intra-page{
    position: sticky;
    top: 10rem;
    right:0rem;
    margin-right: 1rem;
    padding-bottom: 5rem;
    align-items:left;
    justify-content:space-around;
    display: flex;
    flex-direction: column;
    overflow:hidden;
    .active{
      font-weight:5000;
      color: ${(props) => props.theme.secondaryColor};
    }
    ul{
      list-style: none;
      top: 3rem;
    }
    li{
      padding-bottom:0.5rem;
      padding-top:0.5rem;
    }
    @media only screen and (max-width: 900px){
      width: 0;
      opacity:0;
    height:0;
      transition:none;
      visibility:hidden;
    }
  }

  .learn{
    width: 10rem;
  }


.writing_program{
width: 90%;
@media only screen and (max-width: 900px){
  width: 100%;
}
.list{
  padding: 1.875rem 0px;
  table, tr, td{
    border:none;
   }
  .text{
    p{
      color: ${props => props.theme.tertiaryColor};
    }
  }
  .listed{
      text-align: left;
      .table{
          .icon{
              height: 2.5rem;
              width: 2.5rem;
              vertical-align: top;
          }
          .skill{
              color: ${props => props.theme.tertiaryColor};
              font-size: 16px;
              padding: 0 0 1.25rem 1.8rem;
              h4{
                  font-weight: 600;
              }
          }
      }
  }
}
.content_list{
  position: relative;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.content_type { 
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.DarkTheme ? "#212121" : "#FFFFFF"};
  box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.DarkTheme ? "#00D3A9" : "#E6E6E6"};
  &:hover{
      box-shadow: 0px 0px 5px ${props => props.theme.primaryColor};
  }
  padding: 12% 6% 12% 6%;
  height: 220px;
  border-radius: 4%;
  margin-bottom: 30px;
  text-align: center;
  h5{
      margin-bottom: auto; 
      margin-top: 0.5rem;
      font-weight: 700;
      color: ${props => props.theme.secondaryColor}
  }
  p{
      font-weight: 300;
      color: ${props => props.theme.text};
  }
  img{
      height: 60px ; 
      width: auto ;
  }
}
.process {
  margin: 10px auto;
  border-left: solid 2px ${(props) => props.theme.tertiaryColor};
  padding: 0px 20px 0px 20px;
} 
.process .item {
  padding: 10px;
  font-size: 16px;
  line-height: 1.7;
  position: relative;
}
.item::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  border: 3px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondaryColor};
  top: 25px;
  left: -32px;
}
}

`;
