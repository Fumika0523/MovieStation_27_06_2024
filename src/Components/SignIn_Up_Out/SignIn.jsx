import React from "react"

function SignIn (){
    return(
        <>
<form  className="container my-5 d-flex flex-column justify-content-center w-25 " >

  <div class="mb-3 ">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 <div>
  <button type="submit" class="btn btn-secondary my-4">Submit</button>
  </div>
  </form>
        </>
    )
}

export default SignIn

