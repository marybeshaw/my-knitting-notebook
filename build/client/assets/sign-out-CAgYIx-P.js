import{r as a,j as t}from"./jsx-runtime-BJa62n0-.js";import{u as s}from"./UserProvider-DZWmR8mT.js";import{u as m}from"./index-DOTPFuaT.js";import{T as r}from"./Typography-dtGcwS0X.js";import{F as u}from"./components-BuGUhU6K.js";import{B as p}from"./Button-CG61Da3B.js";import"./DefaultPropsProvider-C281ww91.js";import"./ButtonBase-jjP0Lg2h.js";import"./useIsFocusVisible-DIRFxSei.js";import"./chainPropTypes-CPkqCYVL.js";function S(){const{user:o,setLoggedOut:e}=s(),n=m(),i=a.useCallback(c=>{e(!0),n({logout:"yes"},{method:"post",encType:"application/json",navigate:!1,replace:!0})},[n,e]);return t.jsxs(a.Fragment,{children:[t.jsx(r,{variant:"h1",component:"h1",children:"Sign Out"}),(o==null?void 0:o.username)&&t.jsxs(u,{onSubmit:i,children:[t.jsx(r,{variant:"body2",component:"p",sx:{marginTop:1,marginBottom:2},children:"Are you sure you want to sign out?"}),t.jsx(p,{value:"logout",type:"submit",variant:"contained",children:"Yes, Sign Out"})]}),!(o!=null&&o.username)&&t.jsx(r,{variant:"body1",component:"p",children:"You have now logged out of Ravelry."})]})}export{S as default};
