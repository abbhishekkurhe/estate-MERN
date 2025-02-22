import  {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function SignUp() {
  const [formData,setFormData] = useState({})
  const  [error,setError] = useState(null);
  const navigate = useNavigate();
  const  [loading,setLoading] = useState(false);

  const handleChange = (e) => {
   setFormData({
    ...formData,
    [e.target.id]:e.target.value,
   }
  );
  };
  const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method:'POST',
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success ===false){
      setLoading(false);
   setError(data.message);
   return
  }
  setLoading(false);
  setError(null);
  navigate("/SignIn");
  } catch (error) {
    setLoading(false);
    setError(error.message)
  }
 

  }
  
  return (
    <div className='p-10'>
      <div className='mb-4 max-w-lg mx-auto bg-slate-200'>
        <h1 className='text-3xl text-center font-extrabold text-slate-800'>SignUp</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-3'>

          <input type='text' placeholder='username' className='border p-4 rounded-lg' id='username' onChange={handleChange} />

          <input type='email' placeholder='email' className='border p-4 rounded-lg' id='email' onChange={handleChange}/>

          <input type='password' placeholder='password' className='border p-4 rounded-lg'
          id='password'onChange={handleChange} />


          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled-80'>{loading ? 'loading...':'sign up'}</button>
          
        </form>
        <div className='flex gap-2 mt-5'>
          <p>
            Already have an account?
          </p>
          <Link to={"/SignIn"}>
            <span className='text-blue-700'>SignUp</span></Link>
        </div>
        {error && <p className='text-red-800'>{error}</p>}

      </div>
    </div>
  )
}
