import React, { useState } from 'react'
import './App.css';

const Home = () => {
    const[a,setA] = useState()
  return (
    <div>
   <div class="background">
  <div class="shape"></div>
  <div class="shape"></div>
</div>

<form>
  <h3>Register Here</h3>

  <label for="name">Name</label>
  <input type="text" placeholder="Enter your name" id="name" />

  <label for="age">Age</label>
  <input type="number" placeholder="Enter your age" id="age" />

  <label for="city">City</label>
  <input type="text" placeholder="Enter your city" id="city"/>

  <label for="course">Course</label>
  <input type="text" placeholder="Enter your course" id="course"/>

  <label for="mobile">Mobile</label>
  <input type="tel" placeholder="Enter your mobile number" id="mobile"/>

  <button>Submit</button>

  <div class="social">
    <div class="go"><i class="fab fa-google"></i> Google</div>
    <div class="fb"><i class="fab fa-facebook"></i> Facebook</div>
  </div>
</form>

    </div>
  )
}

export default Home