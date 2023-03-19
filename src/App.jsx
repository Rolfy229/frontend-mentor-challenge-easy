import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function Comp1() {
  return (
    <div>
      <div className='d-lg-flex flex-lg-row card col-lg-4 rounded-5 mx-lg-auto mt-lg-5'>

        <div className='rounded-5 col-lg-6 text-white p-2 d-flex flex-column justify-content-center'>

          <div className=''>
            <div className='opacity-75 text-center'>Your Result</div>
            <div className='rounded-circle shadow p-5 m-auto'>
              <h2 className='fw-bolder'>76</h2>
              <span className='small opacity-75'>of 100</span>
            </div>
            <div className='small'>
              <h2 className='text-center'>Great</h2>
              <p className='text-center opacity-75'>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
          </div>

        </div>

        <div className='bg-white rounded-5 p-2 col-lg-6 d-flex flex-column justify-content-center'>

          <div className='px-1'>
            <p className='fs-5 fw-bold'>Summary</p>

            <div className='d-flex bg-danger text-danger fw-semibold bg-opacity-25 rounded-3 p-2 mb-3'>
              <i class="bi bi-lightning-charge me-2"></i>
              <p className='m-0'>Reaction</p>
              <div className='d-flex ms-auto text-black gap-1'>
                <p className='m-0'>80</p>
                <p className='opacity-50 m-0'>/100</p>
              </div>
            </div>

            <div className='d-flex bg-warning text-warning fw-semibold bg-opacity-25 rounded-3 p-2 mb-3'>
              <i class="bi bi-patch-check me-2"></i>
              <p className='m-0'>Memory</p>
              <div className='d-flex ms-auto text-black gap-1'>
                <p className='m-0'>92</p>
                <p className='opacity-50 m-0'>/100</p>
              </div>
            </div>

            <div className='d-flex bg-success text-success fw-semibold bg-opacity-25 rounded-3 p-2 mb-3'>
              <i class="bi bi-chat-dots me-2"></i>
              <p className='m-0'>Verbal</p>
              <div className='d-flex ms-auto text-black gap-1'>
                <p className='m-0'>61</p>
                <p className='opacity-50 m-0'>/100</p>
              </div>
            </div>

            <div className='d-flex bg-primary text-primary fw-semibold bg-opacity-25 rounded-3 p-2 mb-3'>
              <i class="bi bi-eye me-2"></i>
              <p className='m-0'>Visual</p>
              <div className='d-flex ms-auto text-black gap-1'>
                <p className='m-0'>72</p>
                <p className='opacity-50 m-0'>/100</p>
              </div>
            </div>

            <div className='d-flex justify-content-center mt-4 border border-0'>
              <button type="button" className='btn rounded-5 text-white px-5'>Continue</button>
            </div>

          </div>

        </div>
      </div>
      <div className='attribution mt-4'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Florian</a>.
      </div>
    </div>
  )
}

export default Comp1
