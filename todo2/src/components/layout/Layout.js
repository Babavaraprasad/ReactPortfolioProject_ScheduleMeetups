import clasess from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout (props)

{
return (
    <div>
        
  <MainNavigation/>

<main className={clasess.main}>
{props.children}
</main>
  </div>
);

}
export default Layout;
/*
props.children will be used here to render the different routing
configuration in app.js
so we can result in linear app component
*/ 