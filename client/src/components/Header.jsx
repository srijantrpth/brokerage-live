import {FaSearch} from "react-icons/fa"
import { Link,useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"   
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Header() {

  const {currentUser}=useSelector(state=>state.user);   
  const [searchTerm,setSearchTerm]=useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {    
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);   
    urlParams.set('searchTerm', searchTerm);  
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);   
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-background border-b border-border shadow-sm sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/' className='text-2xl font-bold'>
          <div className='gradient-text'>
            PropFinder
          </div>
        </Link>
        
        <form
          onSubmit={handleSubmit}
          className='flex items-center gap-2 flex-1 max-w-md mx-4'
        >
          <Input
            type='text'
            placeholder='Search properties...'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <Button type="submit" size="icon" variant="default">
            <FaSearch className='w-4 h-4' />
          </Button>
        </form>
        
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
            <Button variant="ghost" className='hidden sm:flex'>   
              Home
            </Button>
          </Link>
          <Link to='/about'>
            <Button variant="ghost" className='hidden sm:flex'>
              About
            </Button>
          </Link>
          <Link to='/profile'>
            {currentUser?(
                <img 
                  className='rounded-full h-8 w-8 object-cover cursor-pointer hover:opacity-80 transition-opacity'
                  src={currentUser.avatar} 
                  alt="Profile" 
                  title="Go to Profile"
                />
            ):(
              <Button variant="default">Sign in</Button>
            )
            }
          </Link>
        </ul>
      </div>
    </header>
  )
}
