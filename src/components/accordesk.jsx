import React from 'react'
import { Link } from "react-router-dom";
import logo1 from "../assets/images/accordesk/Accordesk1.png"
import logo2 from "../assets/images/accordesk/Accordesk2.png"
import logo3 from "../assets/images/accordesk/doTask1.png"
import logo4 from "../assets/images/accordesk/projectBook.png"

const Accordesk = () => {
  return (


<section className='ac_desk mt-5 pt-5'>
<div className="container">

<div className="acor py-4 rounded">
<div className="row text-center">
    <div><h1 className='mt-2'>Explore More with  <img src={logo2} alt="" /> Accordesk</h1></div>
<p className='px-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem aut dicta, dignissimos, aliquam impedit possimus suntc <br /> ex sit eius aspernatur distinctio a esse accusamus asperiores accusantium. Aliquam quisquam rem voluptate!</p>    
<div className="d-flex gap-5 justify-content-center mt-5 prod">
<div><Link><img className='acor3 px-5' src={logo4} alt="" /> <h6 className='pt-3 fw-bold'>Pro Book</h6></Link></div>
<div><Link><img className='acor3 px-5' src={logo3} alt="" /> <h6 className='pt-3 fw-bold'>Pro Book</h6></Link></div>
<div><Link><img className='acor3 px-5' src={logo2} alt="" /> <h6 className='pt-3 fw-bold'>Pro Book</h6></Link></div>
<div><Link><img className='acor3 px-5' src={logo4} alt="" /> <h6 className='pt-3 fw-bold'>Pro Book</h6></Link></div>
</div>

</div>
</div>






        </div>




</section>

  )
}

export default Accordesk