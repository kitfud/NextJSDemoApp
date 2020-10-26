import Link from 'next/link'

function Nav(){
  return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">New Site</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link  href="/"><a className = "nav-link">Homepage</a></Link>
        </li>
        <li class="nav-item active">
          <Link  href="/blog"><a className = "nav-link">Blog</a></Link>
        </li>
        <li class="nav-item active">
          <Link  href="/aboutus"><a className = "nav-link">Aboutus</a></Link>
        </li>
       
      
     
      </ul>
    
    </div>
  </nav>

    
    

  )
}

export default Nav